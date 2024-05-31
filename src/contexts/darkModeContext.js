import { createContext, useContext, useEffect, useState } from "react";


export const DarkModeData = createContext(false);
export const DarkModeDispatch = createContext(null);

export function useDarkModeData() {
    return useContext(DarkModeData);
}

export function useDarkModeDispatch() {
    return useContext(DarkModeDispatch);
}

export function DarkModeProvider({ children }) {

    let [darkModeValue, setDarkModeValue] = useState(false);

    useEffect(() => {
        if (darkModeValue) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    }, [darkModeValue]);

    return (
        <DarkModeData.Provider value={darkModeValue}>
            <DarkModeDispatch.Provider value={setDarkModeValue}>
                {children}
            </DarkModeDispatch.Provider>
        </DarkModeData.Provider>
    )
}