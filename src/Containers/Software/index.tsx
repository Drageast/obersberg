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

                            <p> Antimalware Software, die Schadsoftware und Bedrohungen wie
                                Viren, Trojaner, Adware, Bots, Rogue-Dateien, Spyware oder Ransomware erkennt.
                                Wir durchsuchen den Computer nach solchen Schädlingen, entfernt sie oder stellt
                                sie unter Quarantäne. Sollte der Rechner außerdem durch Rootkits befallen und
                                beschädigt worden sein, kann unser System diese ebenfalls entfernen und eventuelle
                                Schäden als Folgen des Angriffes beheben.</p>
                            

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

                            <p> Wir benutzen das One-Time-Pad Verfahren. Dateien sind dadurch nur sehr schwer oder überhaupt
                                nicht dechiffrierbar. Die Schlüssel zum Code sind dabei völlig zufällig erstellt und werden
                                jeweils nur für eine Datei verwendet. Nach einmaliger Verwendung des Schlüssels wird der Schlüssel
                                sofort gelöscht und es wird ein anderer Schlüssel verwendet. So garantieren wir absolute Sicherheit
                                für ihre Daten.
                            </p>
                            

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
