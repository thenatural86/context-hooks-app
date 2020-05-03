import React from "react"
import { Navbar } from "./components/Navbar"
import BookList from "./components/BookList"
// import provider which holds state
import ThemeContextProvider from "./contexts/ThemeContext"
import { ThemeToggle } from "./components/ThemeToggle"
import AuthContextProvider from "./contexts/AuthContext"
import { BookContextProvider } from "./contexts/BookContext"

function App() {
  return (
    <div className="App">
      {/* wrap components in the ThemeContextProvider to give them access to data in that context */}
      <ThemeContextProvider>
        {/* these components are attached to the props of ThemeContextProvider */}
        <AuthContextProvider>
          <Navbar />
          {/* give BookList access to the BookContextProvider */}
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
