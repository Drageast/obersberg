// Laurenz 100%
import React from 'react';

import * as MdIcons from "react-icons/md";

import { Foreground } from '../../Components/Foreground';
import * as css from "./Styles";
import { Button4 } from "../../Components/Buttons";

export function Desktop() {
    return (
        <>
            <Foreground CustomCSS={ css.CustomCSSBase } Opacity={ 50 }>
                <h1>Software-produkte</h1>

                <Foreground CustomCSS={ css.CustomCSSServer } Opacity={ 50 }>
                    <h2>Antimalware</h2>

                    <Foreground CustomCSS={ css.CustomCSSSplitter }>

                        <Foreground CustomCSS={ css.CustomCSSContent } Opacity={ 50 }>
                            <h3>Wir bieten:</h3>

                            <p> Wir schützen sie vor dubiosen Angeboten</p>
                            <p> Wir schützen sie vor dubiosen Webseiten</p>
                            <p> Wir filtern diverse Downloads</p>
                            <p> Wir überwachen die Netzwerkverbindung auf unauthorisierte Zugriffe</p>

                            <Button4 CustomCSS={ css.ButtonStyles } Element={<h3>Kaufen</h3>}/>
                        </Foreground>

                        <Foreground CustomCSS={ css.CustomCSSPic}>
                            <MdIcons.MdCoronavirus className="Virus"/>
                        </Foreground>
                    </Foreground>
                    <h2>Daten Verschlüsselung</h2>

                    <Foreground CustomCSS={ css.CustomCSSSplitter }>

                        <Foreground CustomCSS={ css.CustomCSSContent } Opacity={ 60 }>
                            <h3>Wir bieten:</h3>

                            <p> unser Haus-eigenes System</p>
                            <p> Systeme für private PC's und auch Datenbanken</p>
                            <p> Schnelle funktionsweise</p>
                            <p> Sehr starke Verschlüsselung</p>

                            <Button4 CustomCSS={ css.ButtonStyles } Element={<h3>Kaufen</h3>}/>
                        </Foreground>

                        <Foreground CustomCSS={ css.CustomCSSPic}>
                            <MdIcons.MdEnhancedEncryption className= 'Lock'/>
                        </Foreground>
                    </Foreground>
            </Foreground>
            </Foreground>

        </>
    );
}