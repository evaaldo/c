import { createGlobalStyle } from "styled-components";
import './GlobalStyle.css'

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Gloria+Hallelujah&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
    
    :root {
        --preto: #000;
        --branco: #fff;
        --vermelho: #f00;
        --azul: #00f;
        --verde: #0f0;
        --fundo: #3C2A21;
        --container: #77472f;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Gloria Hallelujah', cursive;
        height: 100vh;    
        color: var(--branco);
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`
