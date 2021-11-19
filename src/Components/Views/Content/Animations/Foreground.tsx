// Luca 90%, Laurenz 10%
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { IForeground } from '../../../Core/Interfaces/Template';
import * as Var from "../../../Core/Variables";
import { TransparencyRange } from "../../../Core/Interfaces/Color";

const StyledForeground = styled(motion.div)<IForeground>`
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

export const AnimatedForeground1 = (props: { Opacity?: TransparencyRange; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; CustomCSS?: any; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    return (
        <StyledForeground Opacity={ props.Opacity } CustomCSS={ props.CustomCSS }
        whileHover={{scale: 1.1}}

        whileTap={{scale: 0.95}}

        transition={{ type: "spring", stiffness: 500 }}

        onClick={props.onClick}
        >
            {props.Element}
        </StyledForeground>
    );
}