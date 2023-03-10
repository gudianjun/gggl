import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useMsal} from '@azure/msal-react'
import {Button, Image} from 'semantic-ui-react'

function App() {
  const [count, setCount] = useState(0);

  function  onClick(){
      setCount((count) => count + 1);
       }
  function  onLogin(){
      window.location.href = 'https://ggglink.b2clogin.com/ggglink.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_loginout&client_id=c5644b50-8a3a-4a75-9b92-79d39821a173&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=id_token&prompt=login'
  }
  return (
    <div className="App">
        <Button onClick={()=>onLogin()}>Login</Button>
      <div>

            <Image src='3dmark.png' size='small' fluid/>


      </div>
      <h1>GGGL</h1>
      <div className="card">
        <button onClick={() => onClick()}>
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
