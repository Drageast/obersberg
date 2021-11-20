// Laurenz 100%
import React from 'react';

import { Foreground } from '../../Components/Foreground';
import * as css from "./Styles";


export function Desktop() {
    return (
        <>
            <Foreground CustomCSS={ css.CustomCSS1 }>
                <h1>Über uns</h1>
                <Foreground CustomCSS={ css.Spacing }>
                    <Foreground CustomCSS={ css.Box }>
                        <h2> Gründung </h2>

                        <p>
                            In 2018 wollten wir ein Unternehmen
                            mit zunehmender Online-Präsenz gründen,
                            allerdings hatten wir große Probleme dabei,
                            ein passendes Angebot für die Sicherheit
                            unserer Daten zu finden. Also haben wir beschlossen,
                            unser eigenes Unternehmen für Sicherheit im Internet
                            zu gründen. Ein Jahr später beschlossen wir, unser Angebot
                            mit sicheren High-End Servern zu erweitern.
                        </p>
                    </Foreground>
                    <Foreground CustomCSS={ css.Box }>
                        <h2>Aktuell</h2>

                        <h3> Momentan arbeiten wir an:</h3>
                        <p> - der Perfektion unserer Produkte </p>
                        <p> - unserem ersten Auftrag für ein renomiertes Unternehmen</p>
                        <p> - der Klimaneutralität für unsere Datenbanken und Produkionsstätten </p>
                        <p> - der Überarbeitung unserer Programme, da Sicherheit
                                bei uns die größte Priorität hat
                        </p>
                    </Foreground>
                    <Foreground CustomCSS={ css.Box }>
                        <h2>Zukunft </h2>

                        <h3> In Zukunft geplante Projekte:</h3>

                        <p> - unser Unternehmen wird klimapositiv </p>
                        <p> - Sicherheit perfektionieren </p>
                        <p> - Reputations-stärkung </p>
                        <p> - das Unternehmen weiter ausbauen </p>
                    </Foreground>
                </Foreground>
            </Foreground>
        </>
    );
}