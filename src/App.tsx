import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/index'
import { Cards } from './components/Cards/Cards'
import { Lists } from './components/Lists/Lists'

function App() {
  return (
    <>
      < Header />
      < Cards />
      < Lists />
    </>
  )
}

export default App
