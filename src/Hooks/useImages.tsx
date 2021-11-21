// Luca 100%
import { useState } from "react";

export function useImages(ImageList: any[], StartIndex: number) {
    const [index, setIndex] = useState(StartIndex);
    const List: any[] = ImageList;

    const Next = () => {
        setIndex(index + 1);

        if (index >= ImageList.length)
        {
            setIndex(0)
        }
        return List[index]
    }

    return Next;
}