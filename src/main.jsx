import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Admin from "./pages/Admin.jsx"
import Service from "./pages/Service.jsx"
import Staff from "./pages/Staff.jsx"
import Home from "./pages/Home.jsx"
import Booking from "./pages/Booking.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="staff" element={<Staff />} />
      <Route path="services" element={<Service />} />
      <Route path="booking" element={<Booking />} />
      <Route path="admin" element={<Admin/>}/>
    </Routes>
  </Router>,
)
