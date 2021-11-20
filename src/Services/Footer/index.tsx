// Luca 100%
import  React from "react";

import { Link } from "react-router-dom";

import * as css from "./Styles";
import { Views, Media } from "../../Utilities/Footer";
import { Button2, Button3 } from "../../Components/Buttons";

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