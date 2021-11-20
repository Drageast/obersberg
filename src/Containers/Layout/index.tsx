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
                                    <DeviceContentManager DesktopElement={ HD } MobileElement={ null }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["Impressum"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Impressum"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ ID } MobileElement={ null }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["AGB"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["AGB"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ AD } MobileElement={ null }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["Produkte"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Produkte"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ PD } MobileElement={ null }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ Views["Ueber-uns"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["Ueber-uns"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ UD } MobileElement={ null }/>
                                </>
                            }/>
                        </>
                    }/>


                {/*NotFound Route*/}
                <Route path={ Views["NotFound"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ Views["NotFound"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ ND } MobileElement={ null }/>
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