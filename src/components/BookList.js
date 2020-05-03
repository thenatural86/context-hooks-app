import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const BookList = () => {
  // Consume the context
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
        <li style={{ background: theme.ui }}>Midnights' Children</li>
        <li style={{ background: theme.ui }}>The Satanic Verses</li>
        <li style={{ background: theme.ui }}>The Three Body Problem</li>
      </ul>
    </div>
  )
}

export default BookList
