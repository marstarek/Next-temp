
import { useState, useEffect } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.setAttribute('data-theme', theme)
        root.setAttribute('data-theme', colorTheme)
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme]
}