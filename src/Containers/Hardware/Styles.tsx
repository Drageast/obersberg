// Luca 100%
import { css } from "styled-components";

import * as Var from "../../Utilities/Variables";

export const CustomCSSBase = css`
    margin: 2rem;
    flex-direction: column;

    h1 {
        color: ${Var.Third()};
    }
`;

export const CustomCSSServer = css`
    width: 90%;
    flex-direction: column;

    h2 {
        color: ${Var.Secondary()};
        font-size: 1.75rem;
    }

`;

export const CustomCSSSplitter = css`
    flex-direction: row;
    width: 100%;

`;

export const CustomCSSContent = css`
    flex-direction: column;
    width: 45%;

    h3 {
        font-size: 1.5rem;

    }

    p {
        font-size: 1rem;
    }

`;

export const CustomCSSPic = css`
    width: 45%;



`;
export {}