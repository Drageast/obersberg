// luca 100%
import React from "react";

import { Routes, Route } from "react-router-dom";

import { Views } from "../../Utilities";
import { ContentWrapper, Global } from "../../Components/Global";
import { DeviceContentManager, ModifiedElement } from "../../Services/Utilities";
// Navbar u. Footer
import { NavbarBody } from "../../Services/Navbar";
import { FooterBody } from "../../Services/Footer";
// Die Verschiedenen Seiten
import { Desktop as HD } from "../Home";
import { Desktop as ND } from "../NotFound";
import { Desktop as ID } from "../Impressum";
import { Desktop as AD } from "../AGB";
import { Desktop as PD } from "../Produkte";
import { Desktop as UD } from "../Ueber-uns";
import { Desktop as KD } from "../Karriere";
import { Desktop as SD } from "../Software";
import { Desktop as HaD} from "../Hardware";

function BaseLayout() {
    return (
        <>
            <Global/>

            <ContentWrapper>

                <NavbarBody/>

                <Routes>
                    <Route path={ Views["Home"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Home"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ HD }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["Impressum"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Impressum"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ ID }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["AGB"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["AGB"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ AD }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["Produkte"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Produkte"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ PD }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["Ueber-uns"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Ueber-uns"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ UD }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["Karriere"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Karriere"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ KD }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["Software"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Software"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ SD }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["Hardware"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Hardware"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ HaD }/>
                                </>
                            }/>
                        </>
                    }/>

                {/*NotFound Route*/}
                <Route path={ Views["NotFound"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["NotFound"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ ND }/>
                                </>
                            }/>
                        </>
                    }/>

                </Routes>

            </ContentWrapper>

            <FooterBody/>

        </>
    );
}

export default BaseLayout;