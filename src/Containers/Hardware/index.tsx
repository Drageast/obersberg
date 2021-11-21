// Luca 100%
import React from 'react';

import { Foreground } from '../../Components/Foreground';
import * as css from "./Styles";
import { useSwapper } from "../../Hooks";
import * as Image from "../../Assets/Server";
import * as Imaget from "../../Assets/Server/Rack";
import { Button4 } from '../../Components/Buttons';
import { Horizontal2 } from '../../Components/Assets';

export function Desktop() {

    const [Image1, Next1] = useSwapper([
        Image.Server_2HE_Back, Image.Server_2HE_Front
    ])

    const [Image2, Next2] = useSwapper([
        Image.Server_3HE_Back, Image.Server_3HE_Front
    ])

    const [Image3, Next3] = useSwapper([
        Image.Server_4HE_Back, Image.Server_4HE_Front
    ])

    const [Image4, Next4] = useSwapper([
        Image.Server_4HE_TTF_Back, Image.Server_4HE_TTF_Front
    ])

    const [Image5, Next5] = useSwapper([
        Imaget.Server_Rack_15HE_Closed, Imaget.Server_Rack_15HE_Open
    ])

    const [Image6, Next6] = useSwapper([
        Imaget.Server_Rack_18HE_Closed, Imaget.Server_Rack_18HE_Open
    ])


    return (
        <>
            <css.H1>Hardware-produkte</css.H1>

            <Foreground CustomCSS={ css.CustomCSSBase } Opacity={ 50 }>

                <section id="Server">
                    <h2>Server(19 zoll)</h2>

                    <Foreground CustomCSS={ css.CustomCSSSplitter }>

                        <Foreground CustomCSS={ css.CustomCSSContainer} Opacity={ 50 }>

                            <Foreground CustomCSS={ css.CustomCSSContent }>
                                <h2>Das 2U 2098-SK ist ein klassisches 19" Rack mit viel Platz für div. Laufwerke</h2>

                                <p>
                                    Die Laufwerkskäfige sind mit wenigen Handgriffen entnehmbar und ermöglichen so eine entspannte Montage der Laufwerke. Durch die Einbaumöglichkeit eines ATX-Netzteils mit 80mm Lüfter ist das 2098-SK ideal für die Konfiguration eines kostengünstigen Systems.
                                    Dank der abschließbaren Türen in der Front, sind die externen Laufwerke vor unbefugtem Zugriff geschützt.
                                    Integrierte Staubfilter sorgen für saubere Luft und ein einwandfreies Kühlverhalten.
                                </p>

                                <Button4 CustomCSS={ css.ButtonStyles } Element={<h3>Kaufen</h3>}/>

                            </Foreground>


                            <Foreground CustomCSS={ css.CustomCSSPic }>
                                    <img alt="Server Bild" src={ Image1 } onClick={ Next1 }/>
                            </Foreground>

                        </Foreground>

                        <Foreground CustomCSS={ css.CustomCSSContainer} Opacity={ 50 }>

                            <Foreground CustomCSS={ css.CustomCSSContent }>
                                <h2>19" IPC 3098-S 3U -Klassisches 19" Rack mit viel Platz für div. Laufwerke</h2>

                                <p>
                                    Die Laufwerkskäfige sind mit wenigen Handgriffen entnehmbar und
                                    ermöglichen so eine entspannte Montage der Laufwerke. Fünf
                                    Einbauslots in voller Bauhöhe sowie eine Einbaumöglichkeit für ein ATX
                                    Netzteil runden das Bild ab.
                                    Dank der abschließbaren Türen in der Front, sind die externen
                                    Laufwerke vor unbefugtem Zugriff geschützt.
                                    Integrierte Staubfilter sorgen für saubere Luft und ein einwandfreies
                                    Kühlverhalten
                                </p>

                                <Button4 CustomCSS={ css.ButtonStyles } Element={<h3>Kaufen</h3>}/>

                            </Foreground>


                            <Foreground CustomCSS={ css.CustomCSSPic }>
                                    <img alt="Server Bild" src={ Image2 } onClick={ Next2 }/>
                            </Foreground>

                        </Foreground>

                        <Foreground CustomCSS={ css.CustomCSSContainer} Opacity={ 50 }>

                            <Foreground CustomCSS={ css.CustomCSSContent }>
                                <h2>Das 4U 4088-S ist ein klassisches 19" Rack mit viel Platz für div. Laufwerke</h2>

                                <p>
                                Die Laufwerkskäfige sind mit wenigen Handgriffen entnehmbar und ermöglichen so eine entspannte Montage der Laufwerke. Eine Slotkartenhalterungen am internen Querträger,
                                der zudem noch 4x 2,5" Laufwerke aufnehmen kann, sorgt für sicheren Betrieb der eingesteckten Karte.
                                Dank der integrierten, abschließbaren Tür in der Front, sind die externen Laufwerke vor unbefugter Entnahme geschützt.
                                </p>

                                <Button4 CustomCSS={ css.ButtonStyles } Element={<h3>Kaufen</h3>}/>

                            </Foreground>


                            <Foreground CustomCSS={ css.CustomCSSPic }>
                                    <img alt="Server Bild" src={ Image3 } onClick={ Next3 }/>
                            </Foreground>

                        </Foreground>

                        <Foreground CustomCSS={ css.CustomCSSContainer} Opacity={ 50 }>

                            <Foreground CustomCSS={ css.CustomCSSContent }>
                                <h2>Das 4U 4452-TFT ist ein 19" Rack mit TFT Bildschirm und Tastatur/Mauspad Schublade</h2>

                                <p>
                                    Mit dem integrierten TFT-Monitor und der eingebauten Tastatur/Mauspad-Schublade eignet sich das 4U-4452-TFT für Server und Workstations an Orten,
                                    wo es keine Möglichkeit für ein 19" Rack gibt.
                                    Die Slim-DVD Befestigung ist mit wenigen Handgriffen entnehmbar und ermöglicht eine entspannte Montage des Slim-DVD Laufwerks.
                                    Hinter der abschließbaren Frontklappe des Gehäuses befinden sich zwei Hot-Swap Festplattenrahmen für wahlweise 2,5" oder 3,5" Laufwerke,
                                    welche zudem die externen Laufwerke und USB-Ports vor unbefugtem Zugriff schützt.
                                </p>

                                <Button4 CustomCSS={ css.ButtonStyles } Element={<h3>Kaufen</h3>}/>

                            </Foreground>


                            <Foreground CustomCSS={ css.CustomCSSPic }>
                                    <img alt="Server Bild" src={ Image4 } onClick={ Next4 }/>
                            </Foreground>

                        </Foreground>

                    </Foreground>

                </section>

            </Foreground>

                <Horizontal2/>

            <Foreground CustomCSS={ css.CustomCSSBase } Opacity={ 50 }>
                <section id="Schrank">
                    <h2>Server Schränke</h2>

                    <Foreground CustomCSS={ css.CustomCSSSplitter }>
                        <Foreground CustomCSS={ css.CustomCSSContainer} Opacity={ 50 }>

                            <Foreground CustomCSS={ css.CustomCSSContent }>
                                <h2>15 HE, kleiner Serverschrank, mit Glastür (BxTxH) 600 x 600 x 860 mm</h2>

                                <p>
                                    Kleine Serverschränke sind besonders geeignet für die Montage unter dem Schreibtisch.

                                    <p>- 1 x Fronttür mit 4mm-Sicherheitsglas, mit Türgriff und Zylinderschloß</p>
                                    <p>- Türöffnungswinkel mindestens 120°</p>
                                    <p>- 4 x 19"-Montageschienen, in der Tiefe verstellbar!</p>
                                    <p>- Dach, mit Passivlüftung und vorbereiteter Halterung für aktive Lüfter + Kabeleinführung, inklusive Abdeckplatten</p>
                                    <p>- Boden mit Kabeleinführung, inklusive Abdeckplatten</p>
                                    <p>- 2 x Seitenwände, herausnehmbar und abschließbar</p>
                                    <p>- Der Serverschrank wird vollständig vormontiert geliefert</p>
                                    <p>- Material: Stahlblech, lakiert</p>
                                    <p>- Farbe: Schwarz</p>
                                    <p>- Maße: 600 x 600 x 860 mm (B x T x H)</p>
                                    <p>- Maximale Einbautiefe = 500mm (50mm Abstand zur Fronttür und 50mm Abstand zur Rückwand/ -tür)</p>

                                    LIEFERUMFANG

                                    <p>- 20 Befestigungssätze (Käfigmutter, Schraube, Unterlegscheibe)</p>
                                    <p>- 4 Schwenkrollen</p>
                                    <p>- 4 höhenverstellbare Nivellierfüße</p>
                                    <p>- Zubehör (Schlüssel)</p>
                                    SCHUTZKLASSE
                                    <p>- IP20</p>
                                </p>

                                <Button4 CustomCSS={ css.ButtonStyles } Element={<h3>Kaufen</h3>}/>

                            </Foreground>


                            <Foreground CustomCSS={ css.CustomCSSPic2 }>
                                    <img alt="Server Bild" src={ Image5 } onClick={ Next5 }/>
                            </Foreground>

                        </Foreground>
                        <Foreground CustomCSS={ css.CustomCSSContainer} Opacity={ 50 }>

                            <Foreground CustomCSS={ css.CustomCSSContent }>
                                <h2>18 HE 19” Serverschrank, mit Glastür (BxTxH) 600 x 600 x 1000mm</h2>

                                <p>
                                    <p>- 1 x Fronttür mit 4mm-Sicherheitsglas, abschließbarer Türgriff mit Zylinderschloß</p>
                                    <p>- 1 x Rücktür aus Stahlblech, abschließbar</p>
                                    <p>- Türanschlag rechts/links wechselbar</p>
                                    <p>- Türöffnungswinkel mindestens 120°</p>
                                    <p>- 2 x Seitenwände, herausnehmbar und abschließbar</p>
                                    <p>- 4 x 19"-Montageschienen, in der Tiefe verstellbar!</p>
                                    <p>- Dach mit Passivlüftung und vorbereiteter Halterung für aktive Lüfter + Kabeleinführung</p>
                                    <p>- Boden mit Kabeleinführung, inklusive Abdeckplatten</p>
                                    <p>- Der Serverschrank wird vollständig vormontiert geliefert</p>
                                    <p>- Maximale Einbautiefe = 500 mm  (50 mm Abstand zur Fronttür und 50 mm zur Rückwand/-tür)</p>

                                    LIEFERUMFANG

                                    <p>- 20 Befestigungssätze (Käfigmutter, Schraube, Unterlegscheibe)</p>
                                    <p>- 4 Schwenkrollen</p>
                                    <p>- 4 höhenverstellbare Nivellierfüße</p>
                                    <p>- Zubehör (Schlüssel)</p>
                                    <p>- 1 Fronttür mit 4mm Sicherheitsglas</p>
                                    <p>- 1 Rücktür aus Stahlblech</p>
                                    <p>- 2 Seitenwände</p>
                                    SCHUTZKLASSE
                                    <p>- IP20</p>
                                </p>

                                <Button4 CustomCSS={ css.ButtonStyles } Element={<h3>Kaufen</h3>}/>

                            </Foreground>


                            <Foreground CustomCSS={ css.CustomCSSPic2 }>
                                    <img alt="Server Bild" src={ Image6 } onClick={ Next6 }/>
                            </Foreground>

                        </Foreground>

                    </Foreground>

                </section>
            </Foreground>
        </>
    );
}