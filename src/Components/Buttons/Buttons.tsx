// Luca 100%
import React from "react";

import { StyledButton1 } from "./ButtonStyles";

export const Button1 = (props: { CustomCSS?: any; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <StyledButton1

        CustomCSS={props.CustomCSS ? props.CustomCSS : ""}

        whileHover={{scale: 1.2, y: -5 }}

        whileTap={{scale: 0.85}}

        transition={{ type: "spring", stiffness: 500 }}

        onClick={props.onClick}

        >
            {props.Element}
        </StyledButton1>
    );
}

export const Button2 = (props: { CustomCSS?: any; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <StyledButton1

        CustomCSS={props.CustomCSS ? props.CustomCSS : ""}

        whileHover={{scale: 1.1, x: -3}}

        whileTap={{scale: 0.95}}

        transition={{ type: "spring", stiffness: 350 }}

        onClick={props.onClick}

        >
            {props.Element}
        </StyledButton1>
    );
}

export const Button3 = (props: { CustomCSS?: any; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <StyledButton1

        CustomCSS={props.CustomCSS ? props.CustomCSS : ""}

        whileHover={{scale: 1.2, x: -4, y: 3}}

        whileTap={{scale: 0.95}}

        transition={{ type: "spring", stiffness: 300 }}

        onClick={props.onClick}

        >
            {props.Element}
        </StyledButton1>
    );
}

export const Button4 = (props: { CustomCSS?: any; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <StyledButton1

        CustomCSS={props.CustomCSS ? props.CustomCSS : ""}

        whileHover={{scale: 1.5, x: -3, y: -3}}

        whileTap={{scale: 0.99}}

        transition={{ type: "ease", stiffness: 150 }}

        onClick={props.onClick}

        >
            {props.Element}
        </StyledButton1>
    );
}