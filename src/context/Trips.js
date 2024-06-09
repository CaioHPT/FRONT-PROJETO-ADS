import { createContext, useState } from "react";

export const TripsContext = createContext();

export default function TripsProvider({ children }) {

    const [tripsConsulta, setTripsConsulta] = useState(null)
    const [inputTripValue, setInputTripValue] = useState("")

    return (
        <TripsContext.Provider value={{
            tripsConsulta,
            setTripsConsulta,
            inputTripValue, 
            setInputTripValue
        }}>
            {children}
        </TripsContext.Provider>
    )
}