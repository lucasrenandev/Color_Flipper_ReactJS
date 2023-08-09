import { useRef, useState } from "react"

export default function simple() {
    const [colors] = useState(["red", "lightblue", "green", "lightgreen", "yellow", 
    "gray", "rebeccapurple", "magenta", "pink", "orange", "violet", "rosybrown"])
    const sectionRef = useRef(null)
    const inputRef = useRef(null)
    let [newColor] = useState("")

    {/* Gerar cores simples */}
    const generateSimpleColors = () => {
        newColor = randomColors()
        sectionRef.current.style.backgroundColor = colors[newColor]
        inputRef.current.value = colors[newColor]
    }

    {/* Cores aleatórias */}
    const randomColors = () => {
        return Math.floor(Math.random() * colors.length)
    }

    return(
        <section ref={sectionRef} className="section">
            <form action="#" className="input-box">
                <input ref={inputRef} type="text" placeholder="White" />
            </form>{/* End input box */}
            <div className="button-box">
                <button id="btn-simple" onClick={generateSimpleColors} 
                type="button">Simple</button>
            </div>{/* End button box */}
        </section>//End section *
    )
}