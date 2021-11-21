// Luca 100%
import styled, { css } from "styled-components";

import * as Var from "../../Utilities/Variables";

export const H1 = styled.h1`
    color: ${Var.Third()};
`;

export const CustomCSSBase = css`
    left: 5%;
    padding: 0;
    margin: 0;
    margin-top: 7rem;
    margin-bottom: 7rem;
    flex-direction: column;
    width: 90%;


    h1 {
        color: ${Var.Third()};
    }

    h2 {
        color: ${Var.Secondary()};
        font-size: 1.75rem;
    }

    section {
        width: 95%;
    }
`;

export const CustomCSSSplitter = css`
    flex-direction: column;
    width: 95%;

    margin: 0;
    padding: 0;
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

export const CustomCSSContainer = css`
    border-color: ${Var.Third()};
    box-shadow: 0 0 10px ${Var.Third()};

    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const CustomCSSPic = css`
    width: 45%;
    height: 45%;

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
`;

export const CustomCSSPic2 = css`
    width: 55%;
    height: 55%;

    img {
        padding: 0.5rem;
        transition: ease-ease-in-out 1s;
        border-radius: 10%;
        width: 60%;
        height: 65%;

        border-color: ${Var.Secondary()};
        box-shadow: 0 0 10px ${Var.Secondary()};

        cursor: pointer;
    }
`;

export const ButtonStyles = css`
    color: ${Var.Primary()};
    background-color: ${Var.Third(30)};

    border-radius: 0.5rem;
    width: 40%;
    height: 40%;

    margin: 1rem;
`;