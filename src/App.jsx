import { Routes, Route } from "react-router-dom"
import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Simple from "./components/simple/Simple"
import Hex from "./components/hex/Hex"

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Simple/>} />
        <Route path="/simple" element={<Simple/>} />
        <Route path="/hex" element={<Hex/>} />
      </Routes>
    </>
  )
}