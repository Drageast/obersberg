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

export const CustomCSSSplitter = css`
    width: 100%;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    .Link {
        position: relative;
        width: 90%;
        align-self: center;
        justify-self: center;

        margin: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 0;
    }
`;

export const LinkWrapper = css`
    position: relative;
    flex-direction: column;

    width: 100%;
    padding: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;

    border-color: ${Var.Third()};
    box-shadow: 0 0 10px ${Var.Third()};

    h1 {
        color: ${Var.Third()};
    }
`;

export const CustomCSSViolet = css`
    flex-direction: column;

    margin: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 45%;
    min-height: 60rem;

    border-color: ${Var.Primary()};
    box-shadow: 0 0 10px ${Var.Primary()};

    align-items: center;
    justify-content: center;

    h1 {
        color: ${Var.Primary()};
    }
`;

export const CustomCSSRed = css`
    flex-direction: column;

    margin: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 45%;
    min-height: 60rem;

    border-color: ${Var.Secondary()};
    box-shadow: 0 0 10px ${Var.Secondary()};

    align-items: center;
    justify-content: center;

    h1 {
        color: ${Var.Secondary()};
    }
`;