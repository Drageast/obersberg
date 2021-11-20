// Luca 100%
import { TransparencyRange } from "../Components/Interfaces/General";
import { Colors as ColorData } from "./Config";


export const Background = (Transparency: TransparencyRange = null) => {
    return `${ColorData["Background"] + ColorData["HexAlpha"][Transparency? Transparency : 100]}`
}

export const Foreground = (Transparency: TransparencyRange = null) => {
    return `${ColorData["Foreground"] + ColorData["HexAlpha"][Transparency? Transparency : 0]}`
}

export const Primary = (Transparency: TransparencyRange = null) => {
    return `${ColorData["Primary"] + ColorData["HexAlpha"][Transparency? Transparency : 100]}`
}

export const Secondary = (Transparency: TransparencyRange = null) => {
    return `${ColorData["Secondary"] + ColorData["HexAlpha"][Transparency? Transparency : 100]}`
}

export const Third = (Transparency: TransparencyRange = null) => {
    return `${ColorData["Third"] + ColorData["HexAlpha"][Transparency? Transparency : 100]}`
}

export const Text = (Transparency: TransparencyRange = null) => {
    return `${ColorData["Text"] + ColorData["HexAlpha"][Transparency? Transparency : 100]}`
}
