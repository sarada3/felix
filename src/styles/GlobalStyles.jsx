import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.color.bg};
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: auto overlay;
        color: white;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    button {
        padding: 0;
        color: inherit;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
