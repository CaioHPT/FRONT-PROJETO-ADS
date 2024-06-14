import { createContext, useState } from "react";
import { useCookies } from 'react-cookie';


export const LoginContext = createContext();

export default function LoginProvider({ children }) {

    const [cookies] = useCookies(['email']);
    const [login, setLogin] = useState(cookies.email !== undefined && cookies.email !== null)

    return (
        <LoginContext.Provider value={{
            login, setLogin
        }}>
            {children}
        </LoginContext.Provider>
    )
}