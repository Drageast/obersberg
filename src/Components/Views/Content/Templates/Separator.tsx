// Luca 100%
import styled from "styled-components";
import * as Var from "../../../Core/Variables";

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
    background-image: linear-gradient(1800deg, ${Var.Secondary(80)}, ${Var.Third(80)});
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const Invisible = styled.div`
    position: relative;
    display: flex;
    height: 1rem;
`;