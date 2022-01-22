import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContext } from './context'
import MyNavbar from './components/UI/navbar/MyNavbar'
import AppRouter from './components/AppRouter'
import './styles/App.css'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <Router>
        <MyNavbar/>
        <AppRouter/>
      </Router>
    </AuthContext.Provider>
  )
}

export default App