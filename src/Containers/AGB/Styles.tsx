// Laurenz 100%
import { css } from "styled-components";

import * as Var from "../../Utilities/Variables";

export const CustomCSS = css`
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem;

    h1 {
        color: ${Var.Primary()};
        margin: 2rem;
    }

    h3 {
        color: ${Var.Secondary(75)};
        margin: 1.5rem;
    }

    p {
        margin: 0;
    }
`;