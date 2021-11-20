// Luca 100%
import { css } from "styled-components";

import * as Var from "../../Utilities/Variables";

export const CustomCSS = css`
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem;

    span {
        font-size: bold;
    }
    h1, h4 {
        color: ${Var.Primary()};
    }
`;