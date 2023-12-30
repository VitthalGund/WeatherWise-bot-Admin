
import axios from "../api/axios"
import { AuthContext, User } from "../types/authContext"
import UserContext from "../context/Auth/userContext"
import { useContext } from "react"
import { toast } from "react-toastify"

const UserInfo = ({ username, chatId, locationName, blocked, handleDeleteUser }: User) => {
    const { auth } = useContext(UserContext) as AuthContext;
    async function handleBlockUser() {
        const d = toast.info("Processing");
        try {
            const resp = await axios.post(`/admin/${blocked ? "unblockUser" : "blockUser"}`, {
                chatId: chatId
            }, { headers: { Authorization: auth.accessToken } })

            if (resp.data.success) {
                toast.success(resp.data.message);
            } else {
                toast.error(resp.data.message);
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.response.data.message);
        } finally {
            toast.dismiss(d);
        }
    }



    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-10 h-10 rounded-full"
                                src={`https://api.multiavatar.com/${username}.svg`}
                                alt="" />
                        </div>

                        <div className="ml-4">
                            <div className="text-sm font-medium leading-5 text-gray-900">{username}
                            </div>
                            <div className="text-sm leading-5 text-gray-500">{chatId}</div>
                        </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">{locationName}</div>
                    {/* <div className="text-sm leading-5 text-gray-500">Web dev</div> */}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span
                        className={`inline-flex px-2 text-xs font-semibold leading-5 text-${blocked ? "red" : "green"}-800 bg-green-100 rounded-full`}>{blocked ? "blocked" : "Active"}</span>
                </td>

                <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                    Owner</td>

                <td
                    className="px-6 py-1 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                    <div className="flex">
                        <button onClick={handleBlockUser} className="text-indigo-600 hover:text-indigo-900 mx-6">{blocked ? "unblock" : "block"}</button>
                        <button onClick={() => handleDeleteUser(chatId)} className="text-red-600 hover:text-red-900">Delete</button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default UserInfo
