import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
    }
    :focus {
        outline: 0;
    }
    body {
        background: #2F2E41;
        -webkit-font-smoothing: antialiased;
        color: #fff;
    }
    body, input, textarea, button {
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
