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