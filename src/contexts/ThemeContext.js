// import a function which creates a context for us
import React, { createContext, Component } from "react"

// creates context that is stored in ThemeContext variable
export const ThemeContext = createContext()

export default class ThemeContextProvider extends Component {
  // data to share btw components
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  }

  // function than can be passed down
  toggleTheme = () => {
    // toggles state
    this.setState({ isLightTheme: !this.state.isLightTheme })
  }
  render() {
    return (
      // Provider tag comes from createContext. Its what wraps our components so that the data can be used inside those components
      // Need to provide value property on Provider tag. Takes in whatever data we want to provide to the components that this wraps
      // ...this.state gets provided to the components that the provider wraps
      <div>
        <ThemeContext.Provider
          // pass state and function down to children
          value={{ ...this.state, toggleTheme: this.toggleTheme }}
        >
          {/* refers to the children that this component wraps */}
          {this.props.children}
          {/* {console.log(ThemeContext)} */}
        </ThemeContext.Provider>
      </div>
    )
  }
}
