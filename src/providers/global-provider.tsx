import { createContext, ReactNode, useContext, useEffect } from "react";
import { User } from "../entities/User";
import useUser from "../hooks/useUser";

interface GlobalContextType {
    isLoggedIn: boolean,
    user: User | undefined,
    isLoading: boolean
}

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children } : GlobalProviderProps) => {
    const {data:user, isLoading } = useUser()

    useEffect(() => {
        if (!isLoading && user) 
            console.log("User data is loaded");
    }, [isLoading, user])

    const isLoggedIn = user && user?.firstName ? true : false
    console.log(`Is Logged In: ${isLoggedIn}`)
    return (
        <GlobalContext.Provider
            value={{isLoggedIn, user, isLoading}}>
            {children}
        </GlobalContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext)

    if (!context)
        throw new Error("useGlobalContext must be used within a provider")
    return context
}

export default GlobalProvider