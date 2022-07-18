import { useState, useEffect } from "react";

const useMediaQuery = (width) => {
    const [isMatches, setIsMatches] = useState(null);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width})`);
        if (media.matches) {
            setIsMatches(media.matches);
        }

        const listener = () => setIsMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [width, isMatches])

    return ( isMatches );
}
 
export default useMediaQuery;
