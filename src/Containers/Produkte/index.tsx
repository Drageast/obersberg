// Laurenz 100%
import React from 'react';

import { Link } from "react-router-dom";

import { Foreground, AnimatedForeground1 } from '../../Components/Foreground';
import * as css from "./Styles";


export function Desktop() {

    return (
        <>
            <Foreground CustomCSS={ css.CustomCSSBase } Opacity={ 50 }>
                <h1> Produkt-Übersicht </h1>

                <Foreground CustomCSS={ css.CustomCSSSplitter }>

                    <Foreground CustomCSS={ css.CustomCSSViolet } Opacity={ 50 }>
                        <h1> Hardware-produkte </h1>

                        <Link to="/produkte/hardware" className="Link">
                            <AnimatedForeground1 CustomCSS={ css.LinkWrapper } Opacity={ 50 } Scale={ 1.05 } Element={
                                <>
                                    <h2>Server (19 zoll)</h2>
                                    <p>hochwertig </p>
                                    <p>schnell</p>
                                    <p>leistungsstark</p>
                                    <p>modern</p>
                                    <p>Server als Basis für ihr Unternehmen</p>
                                    <p>Garantie für bis zu 10 Jahre</p>
                                </>
                            }/>
                        </Link>
                        <Link to="/produkte/hardware" className="Link">
                            <AnimatedForeground1 CustomCSS={ css.LinkWrapper } Opacity={ 50 } Scale={ 1.05 } Element={
                                <>
                                    <h2>Serverschrank (19 zoll)</h2>
                                    <p>sicher </p>
                                    <p>hochwertig</p>
                                    <p>18H</p>
                                    <p>Der Server kommt vollständig montiert bei ihnen an</p>
                                    <p>Garantie für bis zu 10 Jahre</p>
                                </>
                            }/>
                        </Link>
                    </Foreground>

                    <Foreground CustomCSS={ css.CustomCSSRed } Opacity={ 50 }>
                        <h1> Software-produkte </h1>

                        <Link to="/produkte/software" className="Link">
                            <AnimatedForeground1 CustomCSS={ css.LinkWrapper } Opacity={ 50 } Scale={ 1.05 } Element={
                                <>
                                    <h2>Antimalware</h2>
                                    <p>Wir schützen sie vor dubiosen Angeboten und Webseiten</p>
                                    <p>Wir filtern diverse Downloads</p>
                                    <p>Wir überwachen die Netzwerkverbindung auf unauthorisierte Zugriffe</p>
                                    <p>Wir überprüfen jegliche Dateien auf ihren Geräten</p>
                                    <p>Anpassbar - genau für ihre Wünsche und Anforderungen</p>
                                </>
                            }/>
                        </Link>
                        <Link to="/produkte/software" className="Link">
                            <AnimatedForeground1 CustomCSS={ css.LinkWrapper } Opacity={ 50 } Scale={ 1.05 } Element={
                                <>
                                    <h2>Daten Verschlüsselung</h2>
                                    <p>Wir stellen ihnen unser Haus-eigenes System zur Verfügung</p>
                                    <p>Nutzbar für Private PC's als auch Datenbanken</p>
                                    <p>Schnelle funktionsweise</p>
                                    <p>Sehr starke Verschlüsselung</p>
                                </>
                            }/>
                        </Link>
                    </Foreground>

                </Foreground>
            </Foreground>
        </>
    );
}