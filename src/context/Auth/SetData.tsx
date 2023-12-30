import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import UserContext from "./userContext";
import { auth, userData } from "../../types/authContext";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SetData = (prop: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    const [userData, setUserData] = useState<userData>({ username: "", email: "" });
    const [auth, setAuth] = useState<auth>({ email: "", roles: [], accessToken: "" });
    // const [rmail, setRmail] = useState();
    const [persist, setPersist] = useState<string>(JSON.parse(localStorage.getItem("persist")!) || "false");
    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist));
    }, [persist])

    const updateUserData = (data: userData) => {
        setUserData(data);
    }

    const updateAuth = (data: auth) => {
        setAuth(data)
    }
    return (
        <UserContext.Provider value={{ userData, updateUserData, auth, updateAuth, setPersist, persist }}>
            {prop.children}
        </UserContext.Provider>
    )
}
export default SetData;