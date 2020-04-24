import { createContext, useState } from "react";

const ThemeContext = createContext<[String, (theme: string) => void]>([
    "green",
    () => {},
]);

export default ThemeContext;
