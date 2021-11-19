// Luca 90%, Laurenz 10%
import React, { useState } from 'react';
import * as css from "./Styles/NavbarS";
import Logo from "../../SVG/Logo.svg";
import { Data } from "../Config/Navbar";
import { Button1 } from '../Views/Content/Animations/Buttons';
import { Link } from 'react-router-dom';


export function NavbarBody() {
    const [Text, setText] = useState("Obersberg");
    var Counter: number = 0;

    const ToggleRick = () => {
        Counter ++;
        if (Counter % 5 === 0)
        {
            setText("Never gonna give you up")
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
    };

    return (
        <>
            <css.NavbarBody>
                <css.Branding>
                    <img className="Logo" srcSet={Logo} alt="Logo"/>
                    <h1 onClick={ToggleRick}>{Text}</h1>
                    <h2>|</h2>
                </css.Branding>
                <css.LinkBody>
                    <ul>
                        {Data.map((item, index) => {
                            return (
                            <li key={index}>
                                <Link to={item.path}><Button1 Element={<h3>{item.icon}{item.title}</h3>}/></Link>
                            </li>
                        )})}
                    </ul>
                </css.LinkBody>
            </css.NavbarBody>
        </>
    );
}