import { useRef, useState } from "react"

export default function hex() {
    const sectionRef = useRef(null)
    const inputBoxRef = useRef(null)
    const inputRef = useRef(null)
    const iconRef = useRef(null)
    let [newHexCode] = useState("")

    {/* Gerar cores hexadecimal */}
    const generateHexColors = () => {
        newHexCode = hexCode()
        sectionRef.current.style.backgroundColor = newHexCode
        inputRef.current.value = newHexCode
        iconRef.current.style.display = "inline-block"
    }

    {/* Copiar código hexadecimal */}
    const copyHexCode = () => {
        navigator.clipboard.writeText(inputRef.current.value)
        inputBoxRef.current.classList.add("message")
        setTimeout(() => {
            inputBoxRef.current.classList.remove("message")
        }, 2000) 
    }

    {/* Código hexadecimal */}
    const hexCode = () => {
        const hex = '0123456789abcdef'
        const max = 6
        let newHex = ""
        for(let i = 0; i < max; i ++) {
            const randomHex = Math.floor(Math.random() * hex.length)
            newHex += hex.substring(randomHex, randomHex + 1)
        }
        return "#" + newHex
    }

    return(
        <section ref={sectionRef} className="section">
            <form ref={inputBoxRef} action="#" className="input-box">
                <input ref={inputRef} type="text"
                 placeholder="#ffffff" />
                 <i ref={iconRef} onClick={copyHexCode} 
                 className="bx bx-clipboard"></i>
            </form>{/* End input box */}
            <div className="button-box">
                <button id="btn-hex" onClick={generateHexColors} 
                type="button">Hex</button>
            </div>{/* End button box */}
        </section>//End section
    )
}