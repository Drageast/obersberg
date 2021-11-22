// Laurenz 100%
import React, { useState } from 'react';

import { MdOutlineSecurity } from "react-icons/md";
import { FaGlobeEurope } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { AnimatedForeground1, Foreground } from '../../Components/Foreground';
import * as css from "./Styles";
import { Horizontal1, Spacer } from "../../Components/Assets"


export function Desktop() {
    const [Philipp, setPhilipp] = useState("Obersberg");
    var Counter = 0;
    
    const ToggelPhilipp = () => {
        Counter ++;
        
        if (Counter === 3)
        {
            setPhilipp("Phillip ist der beste")
        }
    }
    
    return (
        <>
            <Foreground CustomCSS={ css.RowCSS }>
                <css.AligningBox>
                    <h1 onClick={ ToggelPhilipp }>{Philipp}</h1>
                    <h2>Wo Sicherheit die reale Welt trifft</h2>
                </css.AligningBox>
                <css.AligningBox>
                    <FaGlobeEurope className="Icon1"/>
                    <MdOutlineSecurity className="Icon2"/>
                </css.AligningBox>
            </Foreground>
            <Horizontal1/>
            <Foreground CustomCSS={ css.RowCSS2 }>
                <Link to="/karriere" className="Link">
                <AnimatedForeground1
                Opacity={ 50 }
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
                <Link to="/produkte"className="Link">
                <AnimatedForeground1
                Opacity={ 50 }
                CustomCSS={ css.AligningBox2 }
                Element={
                    <>
                        <h3>Produkte</h3>

                        <p>
                        Sie wollen ihr Unternehmen sicher vor lästigen Hackerangriffen
                        und unerlaubten Zugriffen machen?
                        </p>

                        <h5>
                        Klicken sie hier, um ihr Unternehmen sicherer zu machen!
                        </h5>

                        <p>
                        Sie wollen hochertige und leistungsstarke Server einrichten?
                        </p>

                        <h5>
                        Klicken sie hier, um ihre eigenen Server zu eröffnen!
                        </h5>
                    </>
                }
                />
                </Link>
                <Link to="/ueber-uns" className="Link">
                <AnimatedForeground1
                Opacity={ 50 }
                CustomCSS={ css.AligningBox2 }
                Element={
                    <>
                        <h1>Über uns</h1>

                        <p>
                        Hier finden sie unsere Geschichte, unsere Gegenwart
                        und in der Zukunft geplante Projekte.
                        </p>
                    </>
                }
                />
                </Link>
            </Foreground>
            <Spacer/>
        </>
    );
};
