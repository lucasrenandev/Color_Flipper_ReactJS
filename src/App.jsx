import { Routes, Route } from "react-router-dom"
import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Simple from "./components/simple/Simple"
import Hexa from "./components/hexa/Hexa"

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Simple/>} />
        <Route path="/simple" element={<Simple/>} />
        <Route path="/hexa" element={<Hexa/>} />
      </Routes>
    </>
  )
}