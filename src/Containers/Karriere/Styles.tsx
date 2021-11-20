// Laurenz 60%, Luca 40%
import { css } from "styled-components";

import * as Var from "../../Utilities/Variables";

export const CustomCSS1 = css`
    flex-direction: column;

    h1 {
        color: ${Var.Primary()}
    }

    code {
        font-size: 1.2em;
    }
`;

export const Table = css`
    flex-direction: row;
    column-count: 2;
    width: 90%;
    flex-wrap: wrap;

    h1, h2 {
        color: ${Var.Secondary(90)};
    }
`;

export const Left = css`
    flex-direction: column;
    width: 40%;
    height: 15rem;

    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    background-color: ${Var.Third(20)};
`;

export const Right = css`
    flex-direction: column;
    width: 40%;
    height: 15rem;

    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

`;