// Luca 100%
import styled from "styled-components";

import * as Var from "../../Utilities/Variables";
import { ISeparator } from "../../Components/Interfaces/Separator";

export const Horizontal1 = styled.div<ISeparator>`
    position: relative;
    display: flex;
    align-self: center;
    left: ${props => props.Dimensions? props.Dimensions[2] : 2.5}%;
    justify-self: center;
    overflow: hidden;
    width: ${props => props.Dimensions? props.Dimensions[0] : 95}%;
    height: ${props => props.Dimensions? props.Dimensions[1] : 0.5}rem;
    background-image: linear-gradient(90deg, ${Var.Secondary(80)}, ${Var.Third(80)});
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const Horizontal2 = styled.div<ISeparator>`
    position: relative;
    display: flex;
    align-self: center;
    left: ${props => props.Dimensions? props.Dimensions[2] : 2.5}%;
    justify-self: center;
    overflow: hidden;
    width: ${props => props.Dimensions? props.Dimensions[0] : 95}%;
    height: ${props => props.Dimensions? props.Dimensions[1] : 0.5}rem;
    background-image: linear-gradient(240deg, ${Var.Secondary(80)}, ${Var.Third(80)});
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const Vertical1 = styled.div<ISeparator>`
    position: relative;
    display: flex;
    align-self: center;
    top: ${props => props.Dimensions? props.Dimensions[2] : 2.5}%;
    justify-self: center;
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: ${props => props.Dimensions? props.Dimensions[0] : 95}%;
    width: ${props => props.Dimensions? props.Dimensions[1] : 0.5}rem;
    background-image: linear-gradient(90deg, ${Var.Secondary(80)}, ${Var.Third(80)});
`;

export const Vertical2 = styled.div<ISeparator>`
    position: relative;
    display: flex;
    align-self: center;
    top: ${props => props.Dimensions? props.Dimensions[2] : 2.5}%;
    justify-self: center;
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: ${props => props.Dimensions? props.Dimensions[0] : 95}%;
    width: ${props => props.Dimensions? props.Dimensions[1] : 0.5}rem;
    background-image: linear-gradient(${Var.Secondary(80)}, ${Var.Third(80)});
`;