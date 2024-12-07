import './UseState.css';
import { useState } from "react"

const UseState = () => {
  //console.log(useState("miauuuu"))

  const [theme, setTheme] = useState("light")
  const [counter, setCounter] = useState(0)
  const click1 = () => {
    setTheme("dark")
  }

  const click2 = () => {
    setTheme("light")
  }
  const click3 = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  const click4 = () => {
    setCounter(prevCounter => prevCounter - 1)
  }

  const click5 = () => {
    if (theme === "light") setTheme("dark")
    if (theme === "dark") setTheme("light")
  }

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button id="Toggle Theme" name="Toggle Theme" onClick={click5}>Toggle Theme</button>
      <button onClick={click1}>Dark</button>
      <button onClick={click2}>Light</button>
      <h2>DISPLAY COUNT HERE</h2>
      <button onClick={click3}>
        Increment
      </button>
      <button onClick={click4}>
        Decrement
      </button>
      <p>{counter}</p>
    </div>
  );
};

export default UseState;