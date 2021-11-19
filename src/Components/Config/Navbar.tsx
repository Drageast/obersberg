// Laurenz 100%
import React from 'react';
import * as MdIcons from "react-icons/md";

export const Data = [
    {
        title : "Hauptseite",
        path : "/",
        icon : <MdIcons.MdHome/>
    },
    {
        title: "Produkte",
        path: "/produkte",
        icon: <MdIcons.MdProductionQuantityLimits/>
    },
    {
        title: "Anti-Malware",
        path: "/produkte/anti-malware",
        icon: <MdIcons.MdCoronavirus/>
    }
    ,
    {
        title: "Firewall",
        path: "/produkte/firewall",
        icon: <MdIcons.MdOutlineLocalFireDepartment/>
    },
    {
        title: "Verschlüsselung",
        path: "/produkte/daten-verschluesselung",
        icon: <MdIcons.MdEnhancedEncryption/>
    }
]