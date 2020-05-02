import React, { Component } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export default class ThemeToggle extends Component {
  // give component access to context
  static contextType = ThemeContext

  render() {
    // destructure function called toggleTheme out of context object
    const { toggleTheme } = this.context
    // refers to function on click
    return <button onClick={toggleTheme}>Toggle the Theme</button>
  }
}
