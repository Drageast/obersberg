// Luca 100%
import styled from "styled-components";

import * as Var from "../../Utilities/Variables";

export const Horizontal1 = styled.div`
    position: relative;
    display: flex;
    align-self: center;
    left: 2.5vw;
    justify-self: center;
    overflow: hidden;
    width: 95vw;
    height: 0.5rem;
    background-image: linear-gradient(90deg, ${Var.Secondary(80)}, ${Var.Third(80)});
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const Horizontal2 = styled.div`
    position: relative;
    display: flex;
    align-self: center;
    left: 2.5vw;
    justify-self: center;
    overflow: hidden;
    width: 95vw;
    height: 0.5rem;
    background-image: linear-gradient(180deg, ${Var.Secondary(80)}, ${Var.Third(80)});
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const Vertical1 = styled.div`
    position: relative;
    display: flex;
    align-self: center;
    top: 2.5vh;
    justify-self: center;
    overflow: hidden;
    width: 0.5rem;
    height: 95vh;
    background-image: linear-gradient(90deg, ${Var.Secondary(80)}, ${Var.Third(80)});
`;

export const Vertical2 = styled.div`
    position: relative;
    display: flex;
    align-self: center;
    top: 2.5vh;
    justify-self: center;
    overflow: hidden;
    width: 0.5rem;
    height: 95vh;
    background-image: linear-gradient(${Var.Secondary(80)}, ${Var.Third(80)});
`;