import React from "react"
import Navbar from "./components/Navbar"
import BookList from "./components/BookList"
// import provider which holds state
import ThemeContextProvider from "./contexts/ThemeContext"
import ThemeToggle from "./components/ThemeToggle"
import AuthContextProvider from "./contexts/AuthContext"

function App() {
  return (
    <div className="App">
      {/* wrap components in the ThemeContextProvider to give them access to data in that context */}
      <ThemeContextProvider>
        {/* these components are attached to the props of ThemeContextProvider */}
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
