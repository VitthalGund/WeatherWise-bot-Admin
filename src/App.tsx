import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import RequireAuth from "./components/RequireAuth.tsx";
import PersistenLogin from "./components/PersistentLogin.js";
import LogIn from "./components/Login.tsx";
import { Suspense } from "react";
// import SignIn from "./components/Signup.tsx";
import ReactLoading from "react-loading";
import Dashboard from "./components/Dashboard.tsx";
import "react-toastify/ReactToastify.css"
import SignIn from "./components/Signup.tsx";
import { ToastContainer } from "react-toastify";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}
export default function App() {
  return (
    <>
      <Router basename="/WeatherWise-bot-Admin">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

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

            <Route caseSensitive={true} path="/signup" element={
              <Suspense fallback={
                <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
              }>
                <SignIn />
              </Suspense>
            } />


            {/* Protected route */}
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route caseSensitive={true} path="/dashboard" element={
                <Suspense fallback={
                  <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
                }>
                  <Dashboard />
                </Suspense>
              } />
            </Route>
          </Route>
        </Routes>
      </Router >


    </>
  )
}