// Luca 80%, Laurenz 20%
import { createGlobalStyle } from "styled-components";

import * as Var from "../../Utilities/Variables";

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Roboto&display=swap');

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
        font-weight: 400;
    }

    a {
        color: ${Var.Text()};
        text-decoration: none;
    }
`;
