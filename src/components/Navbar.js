import React, { Component } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export default class Navbar extends Component {
  render() {
    return (
      // Consumer expects to be passed in a function
      <ThemeContext.Consumer>
        {/* function takes in context as a parameter which gives us access to context data that is located in the ThemeContext object*/}
        {(context) => {
          const { isLightTheme, light, dark } = context
          const theme = isLightTheme ? light : dark
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
