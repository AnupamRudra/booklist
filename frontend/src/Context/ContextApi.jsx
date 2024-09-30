/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();


const AppProvider = ({ children }) => {

    // const [books, setBooks] = useState(localStorage.getItem('book') || [])

    const [books, setBooks] = useState(() => {
        const storedArray = localStorage.getItem('books');
        return storedArray ? JSON.parse(storedArray) : [];
    });

    // Update local storage whenever the array changes
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    const [PDF, setPDF] = useState(() => {
        const storedArray = localStorage.getItem('PDF');
        return storedArray ? JSON.parse(storedArray) : [];
    });

    // Update local storage whenever the array changes
    useEffect(() => {
        localStorage.setItem('PDF', JSON.stringify(PDF));
    }, [PDF]);

    const [user, setUser] = useState(() => {
        const storedArray = localStorage.getItem('user');
        return storedArray ? JSON.parse(storedArray) : [];
    });

    // Update local storage whenever the array changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);




    return (
        <ContextApi.Provider value={{ setBooks, books, setPDF, PDF, user, setUser }}>
            {children}
        </ContextApi.Provider>
    )
}

export const useCustomContext = () => {
    return useContext(ContextApi)
}


export default AppProvider