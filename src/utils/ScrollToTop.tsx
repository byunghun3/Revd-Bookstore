import React, { FC, useEffect } from "react";
import { useLocation } from "react-router";

interface ScrollToTopProps {
    children: React.ReactNode;
}

export const ScrollToTop: FC<ScrollToTopProps> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>;
};