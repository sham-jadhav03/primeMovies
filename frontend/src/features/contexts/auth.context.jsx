import { createContext } from "react";

export const authContext = createContext()

export const authContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(true)

    return (
        <>
             
        </>
    )
}