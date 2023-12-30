import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../context/Auth/userContext.ts';
import { AuthContext } from '../types/authContext.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RequireAuth = ({ allowedRoles }: any) => {
    const { auth } = useContext(UserContext) as AuthContext;
    const location = useLocation();
    console.log(auth?.roles)
    console.log(auth?.roles?.find(role => console.log(role)))
    return (
        <>
            {auth?.roles?.find(role => allowedRoles?.includes(role))
                ? <Outlet />
                : <Navigate to="/" state={{ from: location }} replace />
            }
        </>
    )
}

export default RequireAuth