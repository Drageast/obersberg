// luca 100%
import React from "react";
import GlobalStyle, { ContentWrapper } from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";
import { ModifiedElement } from "../Services/Routing";
import { DeviceContentManager } from "../Services/Recognition";
import { Read } from "../Core/ConfigHandler";

// Navbar u. Footer
import { NavbarBody } from "../Services/Navbar";
import { FooterBody } from "../Services/Footer";

// Die Verschiedenen Seiten
import { Desktop as HD } from "../Views/Home";
import { Desktop as ND } from "../Views/Exception";

function BaseLayout() {
    const ViewRoutes = Read()["Views"]
    return (
        <>
            <GlobalStyle/>

            <ContentWrapper>

                <NavbarBody/>

                <Routes>
                    <Route path={ ViewRoutes["Home"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ ViewRoutes["Home"]["Title"] } Element={
                                <>
                                    <DeviceContentManager DesktopElement={ HD } MobileElement={ null }/>
                                </>
                            }/>
                        </>
                    }/>

                <Route path={ ViewRoutes["NotFound"]["Path"] } element={
                        <>
                            <ModifiedElement  Title={ ViewRoutes["NotFound"]["Title"] } Element={
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