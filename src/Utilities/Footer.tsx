// Laurenz 100%
import React from 'react';
import { MdInfoOutline, MdOutlinePersonOutline, MdPlace } from "react-icons/md";
import { VscLaw } from "react-icons/vsc";
import { BsYoutube, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

export const Views = [
    {
        title: "Impressum",
        path: "/impressum",
        icon: <MdInfoOutline/>
    },
    {
        title: "AGB's",
        path: "/agbs",
        icon: <VscLaw/>
    },
    {
        title: "Über uns",
        path: "/ueber-uns",
        icon: <MdOutlinePersonOutline/>
    },
    {
        title: "Platzhalter",
        path: "/404",
        icon: <MdPlace/>
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