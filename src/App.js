import React from "react"
import { PageRoutes } from "./components/PageRoutes/PageRoutes"
import { LoginProvider } from "./contexts/LoginContext"
import "./App.css"

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <PageRoutes />
      </div>
    </LoginProvider >

  )
}

export default App
