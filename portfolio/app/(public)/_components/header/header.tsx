
"use client";

import { useEffect, useState } from "react";
import { NavHeader } from "./nav-header";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Verifica a posição atual ao carregar a página
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-[999] px-3 py-3 transition-all duration-300 sm:px-4 sm:py-4 ${
                scrolled
                    ? "bg-black/80 backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            <NavHeader />
        </header>
    );
}

