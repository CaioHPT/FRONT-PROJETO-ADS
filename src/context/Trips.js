import { createContext, useState } from "react";

export const TripsContext = createContext();

export default function TripsProvider({ children }) {

    const [tripsConsulta, setTripsConsulta] = useState(null)

    return (
        <TripsContext.Provider value={{
            tripsConsulta,
            setTripsConsulta
        }}>
            {children}
        </TripsContext.Provider>
    )
}