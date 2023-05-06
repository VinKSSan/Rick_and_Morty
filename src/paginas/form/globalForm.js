import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        list-style:none;
        text-decoration: none;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    }

    body {
        width: 100%;
        height: 100vh;
        background-color: #081229;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    html {
        font-size: 62.5%;
    }

`

export default GlobalStyle