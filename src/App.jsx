import { useState } from "react"
import MyComponent from "./Components/MyClassComponent"
// import MyComponent from "./Components/MyComponent"

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
    <div>{show && <MyComponent />}</div>
    <p>
      <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
        {show ? 'Hide Post' : 'Show Post'}
      </button>
    </p>
    </>
  )
}

export default App
