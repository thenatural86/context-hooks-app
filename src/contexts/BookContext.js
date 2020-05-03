import React, { createContext, useState } from "react"

//create context to store data in
export const BookContext = createContext()

// take in props to gain access to props.children
export const BookContextProvider = (props) => {
  // useState to create define data
  const [books, setBooks] = useState([
    { title: "Midnights' Children", id: 1 },
    { title: "The Satanic Verses", id: 2 },
    { title: "The Three Body Problem", id: 3 },
  ])
  return (
    // return the provider with a value of books
    <BookContext.Provider value={{ books }}>
      {/* Provide access of BookContextProvider to children*/}
      {props.children}
    </BookContext.Provider>
  )
}
