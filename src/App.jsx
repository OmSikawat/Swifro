import { useState } from 'react'
import Head from "./Head.jsx"
import React from 'react'
import './App.css'
import Category from './Category.jsx'
import TopRest from './topRest.jsx'
import Onlined from './Onlined.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Head />
        <Category />
        <TopRest />
        <Onlined />
    </>
  )
}

export default App
