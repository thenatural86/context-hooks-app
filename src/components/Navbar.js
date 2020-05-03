import React, { Component } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { AuthContext } from "../contexts/AuthContext"

export default class Navbar extends Component {
  render() {
    return (
      // Consumer expects to be passed in a function
      // Can nest multiple context via Consumer
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {/* function takes in context as a parameter which gives us access to context data that is located in the ThemeContext object*/}
            {(themeContext) => {
              {
                /* destructure properties out of context objects */
              }
              const { isAuthenticated, toggleAuth } = authContext
              const { isLightTheme, light, dark } = themeContext
              const theme = isLightTheme ? light : dark
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  {/* callback toggleAuth function on user click */}
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "Logged in" : "Logged out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    )
  }
}
