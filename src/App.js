//import Clock from "./components/Clocks"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  function increase(n = 1) {
    localStorage.setItem('count', Math.min(count + n, 1000))
    setCount(Math.min(count + n, 1000))
  }

  function decrease(n = 1) {
    localStorage.setItem('count', Math.max(count - n, 0))
    setCount(Math.max(count - n, 0))
  }

  function reset() {
    localStorage.clear('count')
    setCount(0)
  }

  useEffect(() => {
    let data = localStorage.getItem('count')
      ? Number(localStorage.getItem('count'))
      : 0
    setCount(data)
  }, [count])

  return (
    <>
      <Header count={count} />
      <Main funcInc={increase} />
      <Footer funcDec={decrease} reset={reset} />
    </>
  )
}

export default App
