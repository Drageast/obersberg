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
                        <h2> Geschichte </h2>

                        <p>
                            Im Jahr 2015 hatten wir die Idee für ein Unternehmen, welches einen Messaging-Dienst bietet,
                            welcher Nachrichten Ende-zu-Ende verschlüsselt. Unser Unternehmen wollte dritt-Anbieter für die Speicherung und die
                            Benachrichtigung nutzen, jedoch war es sehr schwer ein passendes Angebot unter tausenden Firmen zu finden, welche teils sehr
                            unseriös wirkten. So entstand unser neues Unternehmen. Wir beschlossen ein seriöses Unternehmen für sichere Software und Datenbanken
                            zu gründen. Im Jahr 2017 beschlossen wir, einem der größten Wünsche unserer Kunden nachzukommen - Server und Serverschränke. Da unsere
                            Kunden von unserer Sicherheit sehr überzeugt sind, baten sie uns, verschlüsselte Server zu entwickeln und zu verkaufen.

                            So entstand unser Unternehmen, wie es heute ist.
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