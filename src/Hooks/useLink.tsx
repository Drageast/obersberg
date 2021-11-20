// luca 100%
import { useNavigate } from "react-router-dom";

export function useLink() {
    const Navigate = useNavigate()
    return Navigate
}