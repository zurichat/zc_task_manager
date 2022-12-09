import React, { useState, createContext } from 'react'

export const PaginationContext = createContext()

const PaginationContextProvider = (props) => {
    const [currentPage, setCurrentPage] = useState(9)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <PaginationContext.Provider value={{ currentPage, paginate }}>
            {props.children}
        </PaginationContext.Provider>
    )
}

export default PaginationContextProvider