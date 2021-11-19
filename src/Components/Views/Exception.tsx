// Luca 100%
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Foreground } from "./Content/Templates/Foreground";
import { Button1 } from "./Content/Animations/Buttons";
import * as css from "./Content/Styles/ExceptionS";

export function Desktop() {
    const Navigate = useNavigate();
    const GoBack = () => {
        Navigate(-1)
    }
    return (
        <>
            <Foreground Opacity={ null } CustomCSS={ css.CustomForeground1 }>
                <h1>404, Page not found</h1>
                <css.LoadingAnimation/>
                <p> Die von dir angeforderte Seite wurde nicht gefunden oder es ist ein Fehler in einem <code>React.Component</code> aufgetreten.</p>
                <Button1 CustomCSS={ null } Element={
                    <>
                        <h2>Kehre zur vorherigen Seite zurück</h2>
                    </>
                }
                onClick={GoBack}/>
            </Foreground>
        </>
    );
}