// Luca 100%
import styled from "styled-components";
import * as Var from "../../../Core/Variables";
import { IForeground } from "../../../Core/Interfaces/Template";

export const Foreground = styled.div<IForeground>`
    position: relative;

    display: flex;

    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: ${props => Var.Foreground(props.Opacity? props.Opacity : null)};

    border-radius: 0.15rem;
    padding: 0.75rem;

    ${props => props.CustomCSS? props.CustomCSS : ""}
`;