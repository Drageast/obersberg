// Laurenz 100%
import React from 'react';
import { MdInfoOutline, MdOutlinePersonOutline, MdGroup } from "react-icons/md";
import { VscLaw } from "react-icons/vsc";
import { BsYoutube, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

export const Views = [
    {
        title: "Impressum",
        path: "/impressum",
        icon: <MdInfoOutline className="Icon"/>
    },
    {
        title: "AGB",
        path: "/agb",
        icon: <VscLaw className="Icon"/>
    },
    {
        title: "Über uns",
        path: "/ueber-uns",
        icon: <MdOutlinePersonOutline className="Icon"/>
    },
    {
        title: "Karriere",
        path: "/karriere",
        icon: <MdGroup className="Icon"/>
    }
]

export const Media = [
    {
        icon: <BsYoutube className="Icon"/>
    },
    {
        icon: <BsTwitter className="Icon"/>
    },
    {
        icon: <BsInstagram className="Icon"/>
    },
    {
        icon: <BsFacebook className="Icon"/>
    }
]