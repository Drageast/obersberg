// Luca 60%, Laurenz 40%
import { useState } from "react";

export function useSwapper(ImageList: any[]) {
    const [index, setIndex] = useState(0);
    const [Image, setImage] = useState(ImageList[1])

    const Next = () => {
        setIndex(index + 1);

        if (index === ImageList.length - 1)
        {
            setIndex(0)
        }

        setImage(ImageList[index])
    }

    return [Image, Next];
}