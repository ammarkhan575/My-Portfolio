import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
    const getMatches = () => {
        if (typeof window === "undefined") {
            return false;
        }
        return window.matchMedia(query).matches;
    };

    const [matches, setMatches] = useState(getMatches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const listener = (event) => setMatches(event.matches);

        setMatches(mediaQueryList.matches);
        mediaQueryList.addEventListener("change", listener);

        return () => mediaQueryList.removeEventListener("change", listener);
    }, [query]);

    return matches;
};

export default useMediaQuery;
