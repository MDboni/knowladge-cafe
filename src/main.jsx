import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import ThirdPage from './Pages/ThirdPage.jsx'
import SecondPage from './Pages/secondPage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/second" element={<SecondPage/>}/>
        <Route path="/third" element={<ThirdPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
