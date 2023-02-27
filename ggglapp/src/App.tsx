import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Image } from 'semantic-ui-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>

            <Image src='00189.jpg' size='small' fluid/>


      </div>
      <h1>GGGL</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
