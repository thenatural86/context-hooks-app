import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { BookContext } from "../contexts/BookContext"

const BookList = () => {
  // Consume the context
  // destructure properties out of ThemeContext which is passed into the useContext hook
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  // destructure books property out of BookContext
  const { books } = useContext(BookContext)
  // evaluation of isLightTheme. use light or dark depending on boolean
  const theme = isLightTheme ? light : dark
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {/* map through and render books */}
        {books.map((book) => {
          return (
            <li style={{ background: theme.ui }} key={book.id}>
              {book.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BookList
