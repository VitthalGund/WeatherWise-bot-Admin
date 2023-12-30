import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SetData from "./context/Auth/SetData.jsx"
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SetData>
      <GoogleOAuthProvider
        clientId={"735548005010-fdok85icp3ehcav3usp99d96sg1hovuk.apps.googleusercontent.com"}>
        <App />
      </GoogleOAuthProvider>
    </SetData>
  </React.StrictMode>,
)
