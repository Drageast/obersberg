// Luca 90%, Laurenz 10%
import React from 'react';

import { AnimatedForeground } from "./ForegroundStyles";
import { TransparencyRange } from '../Interfaces/General';



export const AnimatedForeground1 = (props: { Opacity?: TransparencyRange; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined; CustomCSS?: any; Element: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    return (
        <AnimatedForeground Opacity={ props.Opacity } CustomCSS={ props.CustomCSS }
        whileHover={{scale: 1.1}}

        whileTap={{scale: 0.95}}

        transition={{ type: "spring", stiffness: 500 }}

        onClick={props.onClick}
        >
            {props.Element}
        </AnimatedForeground>
    );
}