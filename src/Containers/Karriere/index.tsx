// Laurenz 100%
import React from 'react';

import { Foreground } from '../../Components/Foreground';
import * as css from "./Styles";


export function Desktop() {
    return (
        <>
            <Foreground CustomCSS={ css.CustomCSS1 }>
                <h1>Karriere bei uns</h1>

                <Foreground CustomCSS={ css.Table }>

                    <Foreground CustomCSS={ css.Left }>
                        <h1>Vorrausetzung</h1>
                    </Foreground>

                    <Foreground CustomCSS={ css.Right } Opacity={ 50 }>
                        <h2>Was brauchen sie, um bei uns zu arbeiten?</h2>
                        <p>- Erfahrungen mit Windows und Linux Betriebssystemen</p>
                        <p>- Technische und Theoretische Erfahrungen über Betriebssteme und Prozessoren</p>
                        <p>- Abitur/Fachabitur</p>
                        <p>- Erfahrungen in einer der folgenden Bereiche: <code>ASP.NET, Kotlin, Rust, C# oder Objective-C</code></p>
                    </Foreground>

                    <Foreground CustomCSS={ css.Left }>
                        <h1>Arbeitsbereiche</h1>
                    </Foreground>

                    <Foreground CustomCSS={ css.Right } Opacity={ 50 }>
                        <h2>In welchen Bereichen können sie bei uns arbeiten?</h2>
                        <p>- Marketing</p>
                        <p>- Entwicklung</p>
                        <p>- Buchhaltung</p>
                        <p>- Design</p>
                    </Foreground>

                    <Foreground CustomCSS={ css.Left }>
                        <h1>Angebote</h1>
                    </Foreground>

                    <Foreground CustomCSS={ css.Right } Opacity={ 50 }>
                        <h2>Was bieten wir?</h2>
                        <p>- Fortbildungen im Bereich IT und Informatik</p>
                        <p>- Firmenausflüge</p>
                        <p>- Gute Arbeitsatmosphäre</p>
                        <p>- Zusammenarbeit im Team</p>
                    </Foreground>
                </Foreground>
            </Foreground>
        </>
    );
}