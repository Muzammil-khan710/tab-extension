import { createContext, useContext } from "react";

const GlobalContext = createContext()
 
const useGlobal = () => useContext(GlobalContext)

const GlobalProvider = ({children}) => {
    console.log('from global context')
    return(
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}

export { useGlobal, GlobalProvider }