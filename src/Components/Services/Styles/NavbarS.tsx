// Luca 100%
import styled from "styled-components";
import * as Var from "../../Core/Variables";

export const NavbarBody = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
    height: 3.5rem;

    align-items: center;
    text-align: center;
    justify-content: flex-start;

    background-color: ${Var.Foreground(90)};
    background-image: linear-gradient(${Var.Third(1)}, ${Var.Third(0)});
    background-size: 100% 0.45rem;
    background-position: center bottom;
    background-repeat: no-repeat;
`;

export const Branding = styled.div`
    display: flex;
    height: 3rem;

    align-items: center;
    align-self: flex-start;
    justify-self: center;

    h1 {
        color: ${Var.Primary()};
    }

    h2 {
        font-size: 2em;
        font-weight: 700;

        margin-left: 1rem;
        margin-right: 1rem;
    }

    .Logo {
        color: ${Var.Third()};
        margin-right: 0.65rem;
        margin-left: 0.75rem;
        height: 2.5rem;
    }
`;

export const LinkBody = styled.nav`
    display: flex;
    flex-direction: row;

    height: 3rem;
    align-items: center;

    ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        padding: 0.15rem;

        li {
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
`;