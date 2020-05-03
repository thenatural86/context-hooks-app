import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ThemeToggle = () => {
  // destructure function called toggleTheme out of context object
  const { toggleTheme } = useContext(ThemeContext)
  // references toggleTheme function on click
  return <button onClick={toggleTheme}>Toggle the Theme</button>
}
