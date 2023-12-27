import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import RequireAuth from "./components/RequireAuth.tsx";
import PersistenLogin from "./components/PersistentLogin.js";
import LogIn from "./components/Login.tsx";
import { Suspense } from "react";
// import SignIn from "./components/Signup.tsx";
import ReactLoading from "react-loading";
import Dashboard from "./components/Dashboard.tsx";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}
export default function App() {
  return (
    <>
      <Router>

        <Routes>

          {/* Public route */}
          <Route element={<PersistenLogin />}>

            <Route caseSensitive={true} path="/" element={
              <Suspense fallback={
                <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
              }>
                <LogIn />
              </Suspense>
            } />

            <Route caseSensitive={true} path="/dashboard" element={
              <Suspense fallback={
                <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
              }>
                <Dashboard />
              </Suspense>
            } />

            {/* Protected route */}
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            </Route>
          </Route>
        </Routes>
      </Router>


    </>
  )
}