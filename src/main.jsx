// this is main pages added alll providre and make secure 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routers/Routes.jsx'
import AuthProvider from './authContext/AuthProvider.jsx'
import "slick-carousel/slick/slick.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
