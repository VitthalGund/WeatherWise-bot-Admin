
import { User } from "../types/authContext"
const UserInfo = ({ username, chatId, locationName, blocked }: User) => {

    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
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
                    <div className="text-sm leading-5 text-gray-500">Web dev</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span
                        className={`inline-flex px-2 text-xs font-semibold leading-5 text-${blocked ? "red" : "green"}-800 bg-green-100 rounded-full`}>{blocked ? "blocked" : "Active"}</span>
                </td>

                <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                    Owner</td>

                <td
                    className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
            </tr>
        </>
    )
}

export default UserInfo
