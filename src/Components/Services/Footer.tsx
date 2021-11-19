// Luca 100%
import  React from "react";
import * as css from "./Styles/FooterS";
import { Views, Media } from "../Config/Footer";
import { Link } from "react-router-dom";
import { Button2, Button3 } from "../Views/Content/Animations/Buttons";

export function FooterBody() {
    return (
        <>
            <css.FooterBody>

                <css.ContentBox>
                    <css.ViewList>
                            {Views.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path} title={item.title}><Button2 Element={<>{item.icon}{item.title}</>}/></Link>
                                    </li>
                                );
                            })}
                    </css.ViewList>
                </css.ContentBox>
                <css.ContentBox>
                    <css.MediaList>
                            {Media.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Button3 Element={<>{item.icon}</>}/>
                                    </li>
                                );
                            })}
                    </css.MediaList>
                </css.ContentBox>

            </css.FooterBody>
        </>
    );
}