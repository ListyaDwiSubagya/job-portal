import { createContext } from "react";

const AppContext = createContext()

export const AppContextProvider = (proops) => {

    const value = {

    }

    return (<AppContext.Provider value={value}>
        {proops.children}
    </AppContext.Provider>)

}