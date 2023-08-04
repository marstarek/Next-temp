
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import UseTheme from "./UseTheme";

export default function Switcher() {
    const [colorTheme, setTheme] = UseTheme();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                style={{ marginBottom: "0" }}
                className="fill-current"
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    );
}