// Laurenz 100%
import { css } from "styled-components";

import * as Var from "../../Utilities/Variables";

export const CustomCSS1 = css`
    flex-direction: column;
    column-count: 3;

    h1 {
        color: ${Var.Primary()};
    }

    h2, h3 {
        color: ${Var.Secondary()};
    }
`;

export const Spacing = css`
    width: 90%;
    justify-content: space-around;
`;

export const Box = css`
    flex-direction: column;

    width: 30%;

    background-color: ${Var.Third(10)};
`;