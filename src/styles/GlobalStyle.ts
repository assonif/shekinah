import { createGlobalStyle } from "styled-components";
import color from "./Colors";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-decoration: none;

    -webkit-tap-highlight-color: transparent;
}

body {
    background:${color.neutral_color_01};
    color:${color.neutral_color_09};
    font-family: Arial, Helvetica, sans-serif;
}

input, button {
    border: none;
    outline: 0;
    appearance: none;
}

ol, ul {
    list-style: none outside none;
}
`;
