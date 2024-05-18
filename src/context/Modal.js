import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {

    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [idTripSelected, setIdTripSelected] = useState(null);
    const [tripSelected, setTripSelected] = useState(null);

    return (
        <ModalContext.Provider value={{
            openModalDelete,
            setOpenModalDelete,
            idTripSelected,
            setIdTripSelected,
            openModalUpdate,
            setOpenModalUpdate,
            tripSelected,
            setTripSelected
        }}>
            {children}
        </ModalContext.Provider>
    )
}