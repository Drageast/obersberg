// Luca 100%
import React from 'react';

import { Foreground } from '../../Components/Foreground';
import * as css from "./Styles";

export function Desktop() {
    return (
        <>
            <Foreground CustomCSS={ css.CustomCSSBase } Opacity={ 50 }>
                <h1>Hardware-produkte</h1>

                <Foreground CustomCSS={ css.CustomCSSServer } Opacity={ 50 }>
                    <h2>Server(19 zoll)</h2>

                    <Foreground CustomCSS={ css.CustomCSSSplitter }>

                        <Foreground CustomCSS={ css.CustomCSSContent } Opacity={ 50 }>
                            <h3>Server 2HE</h3>

                            <p> sehr hochwertige Verarbeitung für optimale Nutzung</p>
                            <p> abschließbare Fronttür gegen unerlaubte Entnahme</p>
                            <p> perfekte Kabelführung durch den passenden Serverschrank</p>
                            <p> 2 HE für individuelle Serverkapazität</p>

                        </Foreground>

                        <Foreground CustomCSS={ css.CustomCSSPic}>

                        </Foreground>
                    </Foreground>
                </Foreground>
            </Foreground>
        </>
    );
}