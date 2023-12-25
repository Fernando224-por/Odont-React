import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./views/guestPages/HomePage.jsx"
import LoginPage from "./views/guestPages/LoginPage.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App