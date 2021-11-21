// Luca 80%, Laurenz 20%
import { createGlobalStyle } from "styled-components";

import * as Var from "../../Utilities/Variables";

export const Global = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: 'Quicksand', sans-serif;
        text-align: center;
        align-items: center;
        justify-content: center;

        background-color: ${Var.Background()};
        color: ${Var.Text()};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
    }

    a {
        color: ${Var.Text()};
        text-decoration: none;
    }
`;
