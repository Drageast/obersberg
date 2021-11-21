// Laurenz 100%
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

    border-color: ${Var.Third()};
    box-shadow: 0 0 10px ${Var.Third()};

    h3 {
        font-size: 1.5rem;

    }

    p {
        font-size: 1rem;
    }


`;

export const CustomCSSPic = css`
    width: 45%;
    height: 45%;
    justify-content: center;
    align-items: center;

    img {
        padding: 0.5rem;
        transition: ease-ease-in-out 1s;
        border-radius: 10%;
        width: 55%;
        height: 50%;

        border-color: ${Var.Secondary()};
        box-shadow: 0 0 10px ${Var.Secondary()};

        cursor: pointer;
    }

    .Virus {
        height: 9rem;
        width: 9rem;
        color: ${Var.Primary( 60 )};
    }

    .Lock {
        height: 9rem;
        width: 9rem;
        color: ${Var.Primary( 60 )};
    }
`;
export {}