// Laurenz 100%
import React from 'react';

import * as MdIcons from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si"

export const Data = [
    {
        title : "Hauptseite",
        path : "/",
        icon : <MdIcons.MdHome className="Icon"/>
    },
    {
        title: "Produkte",
        path: "/produkte",
        icon: <MdIcons.MdProductionQuantityLimits className="Icon"/>
    },
    {
        title: "Software",
        path: "/produkte/software",
        icon: <SiBmcsoftware className="Icon"/>
    },
    {
        title: "Hardware",
        path: "/produkte/hardware",
        icon: <FaServer className="Icon"/>
    }
]