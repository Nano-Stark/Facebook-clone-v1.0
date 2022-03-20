import { useState } from 'react'
import './App.css'
import Feed from './components/Feed'
import Header from './components/Header'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import { useStateValue } from './components/StateProvider'
import Widget from './components/Widget'

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <>
        <Header />
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </>
      )}
    </div>
  )
}

export default App
