import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Users from "./components/Users.jsx"
import Kikilaa from "./components/Kikilaa"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />


        <Route path="/users" element={<Users />} />
<Route path="/one/:namee" element={<Kikilaa />} />
      </Routes>
    </BrowserRouter>

    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} />
      </Route>
    </Routes>
  </BrowserRouter> */}


  </StrictMode>,
)
