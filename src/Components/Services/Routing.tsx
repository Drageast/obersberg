// Luca 80%, Laurenz 20%
import { useNavigate } from 'react-router-dom'
import { Read } from "../Core/ConfigHandler";

export const ModifiedElement = (props: { Title: string; Element: any; }) => {
    const Routing = Read()["Routing"];
    document.title = `${Routing["Name"]} ${Routing["Separator"]} ${props.Title}`;
    return props.Element;
}

export const DivLink = (path: string = "/") => {
    const navigate = useNavigate();
    navigate(path);
}