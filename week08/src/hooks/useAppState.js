"use client"
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export function AppProvider({children}) {
    const [appState, setAppState] = useState ({isActive: true, people: []});
    function addPerson(personInfo) {
        setAppState({...appState, people: [...appState.people, personInfo]});
    }

    const appValues = {...appState, addPerson};

    return <AppContext.Provider value={appValues}>{children}</AppContext.Provider>

}

export default function useAppState() {
    return useContext(AppContext);
}

