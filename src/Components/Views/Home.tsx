// Laurenz 100%
import React from 'react';
import { Foreground } from "./Content/Templates/Foreground";
import { Horizontal1 } from "./Content/Templates/Separator";
import * as css from "./Content/Styles/HomeS";
import { MdOutlineSecurity } from "react-icons/md";
import { FaGlobeEurope } from "react-icons/fa";
import { AnimatedForeground1 } from './Content/Animations/Foreground';
import { Link } from 'react-router-dom';

export function Desktop() {
    return (
        <>
            <Foreground CustomCSS={ css.RowCSS }>
                <css.AligningBox>
                    <h1>Obersberg</h1>
                    <h2>Wo Sicherheit die reale Welt trifft</h2>
                </css.AligningBox>
                <css.AligningBox>
                    <FaGlobeEurope className="Icon1"/>
                    <MdOutlineSecurity className="Icon2"/>
                </css.AligningBox>
            </Foreground>
            <Horizontal1/>
            <Foreground CustomCSS={ css.RowCSS }>
                <Link to="/karriere">
                <AnimatedForeground1
                CustomCSS={ css.AligningBox2 }
                Element={
                    <>
                        <h1>Karriere</h1>

                        <p>
                            Sie sind interessiert an unserer Firma
                            und können sich vorstellen bei uns Karriere zu machen?
                        </p>
                        <p>
                            Dann klicken sie hier
                        </p>
                    </>
                }
                />
                </Link>
            </Foreground>
        </>
    );
};
