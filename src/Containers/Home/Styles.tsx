// Laurenz 100%
import styled, { css } from "styled-components";

import * as Var from "../../Utilities/Variables";

export const RowCSS = css`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
`;

export const AligningBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 1rem;
    width: 40%;
    height: 50%;


    h1 {
        margin: 0.5rem;
        font-size: 5em;
    }

    h2 {
        color: ${Var.Secondary()};
        font-size: 3.5em;
    }

    .Icon1 {
        width: 50%;
        height: 25%;
        color: ${Var.Third()};
    }

    .Icon2 {
        margin-left: 50%;
        width: 50%;
        height: 25%;
        color: ${Var.Secondary()};
    }
`;

export const RowCSS2 = css`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    .Link {
        width: 30%;
    }
`;


export const AligningBox2 = css`
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: ${Var.Primary()};
    }

    h3 {
        color: ${Var.Secondary()};
        font-size: 2em;
    }
`;