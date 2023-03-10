import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
