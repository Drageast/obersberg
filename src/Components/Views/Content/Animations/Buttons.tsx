// Luca 100%
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"
import { IMotion } from "../../../Core/Interfaces/Animation";

const ButtonStyle1 = styled(motion.div)<IMotion>`
    text-decoration: none;
    ${props => props.CustomCSS};
`;

export const Button1 = (props: { CustomCSS?: any; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <ButtonStyle1

        CustomCSS={props.CustomCSS ? props.CustomCSS : ""}

        whileHover={{scale: 1.2, y: -5 }}

        whileTap={{scale: 0.85}}

        transition={{ type: "spring", stiffness: 500 }}

        onClick={props.onClick}

        >
            {props.Element}
        </ButtonStyle1>
    );
}

export const Button2 = (props: { CustomCSS?: any; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <ButtonStyle1

        CustomCSS={props.CustomCSS ? props.CustomCSS : ""}

        whileHover={{scale: 1.1, x: -3}}

        whileTap={{scale: 0.95}}

        transition={{ type: "spring", stiffness: 350 }}

        onClick={props.onClick}

        >
            {props.Element}
        </ButtonStyle1>
    );
}

export const Button3 = (props: { CustomCSS?: any; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <ButtonStyle1

        CustomCSS={props.CustomCSS ? props.CustomCSS : ""}

        whileHover={{scale: 1.2, x: -4, y: 3}}

        whileTap={{scale: 0.95}}

        transition={{ type: "spring", stiffness: 300 }}

        onClick={props.onClick}

        >
            {props.Element}
        </ButtonStyle1>
    );
}