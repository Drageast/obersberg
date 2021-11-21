// Laurenz 100%
import styled from "styled-components";

import * as Var from "../../Utilities/Variables";
import { Views, Media } from "../../Utilities/Footer";

export const FooterBody = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    height: 4.5rem;
    margin: 0 auto;

    background-color: ${Var.Foreground(50)};
    background-image: linear-gradient(${Var.Secondary(0)}, ${Var.Secondary(1)});
    background-size: 100% 0.45rem;
    background-position: center top;
    background-repeat: no-repeat;
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 4rem;
`;

export const ViewList = styled.ul`
    list-style-type: none;
    columns: ${Math.ceil(Views.length / 2)};
`;

export const MediaList = styled.ul`
    list-style-type: none;
    columns: ${Media.length};

    .Icon {
        width: 1.5rem;
        height: 1.5rem;
    }
`;