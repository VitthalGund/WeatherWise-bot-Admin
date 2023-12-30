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
        clientId={import.meta.env.ID}>
        <App />
      </GoogleOAuthProvider>
    </SetData>
  </React.StrictMode>,
)
