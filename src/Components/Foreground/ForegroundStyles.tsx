// Luca 100%
import styled from "styled-components";
import { motion } from 'framer-motion';

import { IForeground } from "../Interfaces/Foreground";
import * as Var from "../../Utilities/Variables";

export const Foreground = styled.div<IForeground>`
    position: relative;

    display: flex;

    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: ${props => Var.Foreground(props.Opacity? props.Opacity : null)};

    border-radius: 0.5rem;
    padding: 0.75rem;

    ${props => props.CustomCSS? props.CustomCSS : ""}
`;

export const AnimatedForeground = styled(motion.div)<IForeground>`
    position: relative;

    display: flex;

    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: ${props => Var.Foreground(props.Opacity? props.Opacity : null)};

    border-radius: 0.5rem;
    padding: 0.75rem;

    ${props => props.CustomCSS? props.CustomCSS : ""}
`;