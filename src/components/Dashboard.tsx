import { useContext, useEffect, useState } from 'react'
import axios from '../api/axios';
import UserContext from '../context/Auth/userContext.ts';
import { AuthContext } from '../types/authContext.ts';
import UserInfo from './UserInfo.tsx';
import { User } from "../types/authContext.ts"
import { toast } from 'react-toastify';
import "../App.css"

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [user, setUsers] = useState<User[]>();
    const { auth } = useContext(UserContext) as AuthContext;
    // console.log(auth.accessToken)
    document.addEventListener("UserDeleted", (e) => {
        console.log(e)
    })
    useEffect(() => {
        const getUsers = async () => {
            const resp = await axios.get("/admin/users", {
                headers: {
                    Authorization: auth.accessToken
                }
            })
            setUsers(resp.data)
        }
        getUsers();
    }, [auth.accessToken])

    async function handleDeleteUser(chatId: string) {
        const d = toast.info("Processing");
        try {
            const resp = await axios.delete('/admin/user', { headers: { Authorization: auth.accessToken }, data: { chatId } })
            const event = new CustomEvent('deleted', {
                detail: {
                    chatId
                }
            })
            dispatchEvent(event);
            if (resp.data.success) {
                toast.success(resp.data.message);
                setUsers(user?.filter((item) => item.chatId !== chatId))
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
            <div>
                <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

                <div x-data="{ sidebarOpen: false }" className="flex h-screen bg-gray-200">
                    <div onClick={() => setSidebarOpen(false)} className={` ${sidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`}></div>

                    <div className={`${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0`}>
                        <div className="flex items-center justify-center mt-8">
                            <div className="flex items-center">
                                <svg className="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                                </svg>

                                <span className="mx-2 text-2xl font-semibold text-white">Weather Wise</span>
                            </div>
                        </div>

                        <nav className="mt-10">
                            <a className="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25" href="#">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>

                                <span className="mx-3">Dashboard</span>
                            </a>

                        </nav>
                    </div>
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
                            <div className="flex items-center">
                                <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </header>
                        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                            <div className="container px-6 py-8 mx-auto">
                                <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

                                <div className="mt-4">
                                    <div className="flex flex-wrap -mx-6">
                                        <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                                            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                                                <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                                                    <svg className="w-8 h-8 text-white" viewBox="0 0 28 30" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                                                            fill="currentColor"></path>
                                                    </svg>
                                                </div>

                                                <div className="mx-5">
                                                    <h4 className="text-2xl font-semibold text-gray-700">{user?.length}</h4>
                                                    <div className="text-gray-500">Current Users</div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="mt-8">

                                </div>

                                <div className="flex flex-col mt-8">
                                    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8" id='userItems'>
                                        <div
                                            className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                                            <table className="min-w-full">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                            Username</th>
                                                        <th
                                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                            Location</th>
                                                        <th
                                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                            Status</th>
                                                        <th
                                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                            Role</th>
                                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                                    </tr>
                                                </thead>

                                                <tbody className="bg-white">
                                                    {user?.map((item, key) => {
                                                        return <UserInfo
                                                            handleDeleteUser={handleDeleteUser}
                                                            username={item.username}
                                                            blocked={item.blocked}
                                                            chatId={item.chatId}
                                                            locationName={item.locationName}
                                                            key={key} />
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Dashboard
