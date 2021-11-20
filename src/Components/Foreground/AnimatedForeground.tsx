// Luca 90%, Laurenz 10%
import React from 'react';

import { AnimatedForeground } from "./ForegroundStyles";
import { TransparencyRange } from '../Interfaces/General';



export const AnimatedForeground1 = (props: { Scale?: number; Opacity?: TransparencyRange; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; CustomCSS?: any; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    return (
        <AnimatedForeground Opacity={ props.Opacity } CustomCSS={ props.CustomCSS }
        whileHover={{scale: props.Scale? props.Scale : 1.1}}

        whileTap={{scale: 0.95}}

        transition={{ type: "spring", stiffness: 500 }}

        onClick={props.onClick}
        >
            {props.Element}
        </AnimatedForeground>
    );
}

export const AnimatedForeground2 = (props: { Color?: string; Opacity?: TransparencyRange; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; CustomCSS?: any; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    return (
        <AnimatedForeground Opacity={ props.Opacity } CustomCSS={ props.CustomCSS }
        whileHover={{scale: 1.1, boxShadow: `0 0 10px ${props.Color? props.Color : "#000000"}`}}

        whileTap={{scale: 0.95}}

        transition={{ type: "spring", stiffness: 500 }}

        onClick={props.onClick}
        >
            {props.Element}
        </AnimatedForeground>
    );
}