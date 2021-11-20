// Luca 80%, Laurenz 20%
import { useNavigate } from 'react-router-dom'

import { Routing } from "../../Utilities/Config";

export const ModifiedElement = (props: { Title: string; Element: any; }) => {
    document.title = `${Routing["Name"]} ${Routing["Separator"]} ${props.Title}`;
    return props.Element;
}

export const DivLinker = (path: string = "/") => {
    const navigate = useNavigate();
    navigate(path);
}