import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const BookList = () => {
  // destructure properties out of ThemeContext which is passed into the useContext hook
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  // evaluation of isLightTheme. use light or dark depending on boolean
  const theme = isLightTheme ? light : dark
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Book1</li>
        <li style={{ background: theme.ui }}>Book2</li>
        <li style={{ background: theme.ui }}>Book3</li>
      </ul>
    </div>
  )
}

export default BookList
