import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({children}) {

    const [openModal, setOpenModal] = useState(false);
    const [idTripSelected, setIdTripSelected] = useState(null);
    
    return(
        <ModalContext.Provider value={{openModal, setOpenModal, idTripSelected, setIdTripSelected}}>
            {children}
        </ModalContext.Provider>
    )
}