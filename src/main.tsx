import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from "./router";
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
/* style */
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)
