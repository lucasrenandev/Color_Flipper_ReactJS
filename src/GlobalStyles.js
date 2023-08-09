import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        list-style: none;
        text-decoration: none;
        outline: none;
        border: none;
    }

    #root {
        min-height: 100vh;
    }

    /* ===== Header ===== */
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 22px 18%;
    }

    .logo {
        font-size: 24px;
        font-weight: 600;
        color: #000;
        text-transform: capitalize;
    }

    .nav-list {
        display: flex;
        align-items: center;
    }

    .nav-list li {
        padding: 0 1rem;
        margin: 0 1rem;
    }

    .nav-list li a {
        font-size: 1.1rem;
        color: #000;
        font-weight: 500;
        transition: color 0.2s ease;
        &:hover {
            color: blue;
        }
    }

    /* ===== Section ===== */
    .section {
        width: 100%;
        height: 100vh;
        display: grid;
        place-content: center;
        text-align: center;
        gap: 2rem;
    }

    .input-box {
        position: relative;
        width: 400px;
        height: 60px;
        background-color: #000;
        border-radius: 30px;
    }

    .input-box input {
        display: block;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-radius: 30px;
        padding: 0 3.5rem 0 2rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #fff;
        letter-spacing: 2px;
    }

    .input-box i {
        position: absolute;
        color: #fff;
        right: 27px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        cursor: pointer;
        display: none;
    }

    .button-box button {
        display: inline-block;
        width: 150px;
        height: 50px;
        background-color: transparent;
        color: #fff;
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 2px;
        cursor: pointer;
        border-radius: 30px;
    }

    #btn-simple {
        background-color: darkblue;
    }

    #btn-hex {
        background-color: orangered;
    }

    .input-box::after {
        content: 'Copied!';
        position: absolute;
        right: 5px;
        top: -60px;
        background-color: #22d000;
        color: #000;
        padding: 8px 15px;
        font-size: 13px;
        font-weight: 500;   
        border-radius: 30px;
        z-index: 100;
    }
    .input-box::before {
        content: '';
        position: absolute;
        right: 30px;
        top: -32px;
        width: 15px;
        height: 15px;
        background-color: #22d000;
        transform: rotate(45deg);
        z-index: 10;
    }

    .input-box::after,
    .input-box::before {
        display: none;
    }

    .input-box.message::after,
    .input-box.message::before {
        display: block;
    }
`