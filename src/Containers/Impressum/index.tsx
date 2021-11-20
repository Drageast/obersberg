// Laurenz 100%
import React from 'react';

import { Foreground } from "../../Components/Foreground";
import * as css from "./Styles";

export function Desktop() {
    return (
        <>
            <Foreground CustomCSS={ css.CustomCSS } Opacity={ 50 }>

                <h1>Impressum</h1>
                <p>Obersberg GmbH</p>
                <p>Am Obersberg 1 </p>
                <p>36251 Bad Hersfeld </p>
                <p>Deutschland</p>

                <p><span>Telefon:</span> 06621 620090</p>

                <p><span>Mail:</span> am@obersberg.com </p>

                <p><span>Geschäftsführer:</span> Luca Michael Schmidt,  Laurenz Frerich Bernhart Lübben</p>

                <p><span>Handelsregister:</span> Amtsgericht Bad Hersfeld, HRB 00000000 </p>

                <p> Kleinunternehmer gemäß § 19 UStG </p>

                <h4>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
                Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.
                Zur Beilegung von Streitigkeiten aus einem Vertragsverhältnis mit einem Verbraucher bzw. darüber, ob ein solches Vertragsverhältnis überhaupt besteht,
                sind wir zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle verpflichtet.
                Zuständig ist die Außergerichtliche Streitbeilegungsstelle für
                Verbraucher und Unternehmer e. V., Hohe Straße 11, D-04107 Leipzig, www.streitbeilegungsstelle.org.
                An einem Streitbeilegungsverfahren vor dieser Stelle werden wir teilnehmen.
                </h4>
            </Foreground>
        </>
    );
}