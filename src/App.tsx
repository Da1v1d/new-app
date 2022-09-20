import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './pages/Home/Home';
import { web3 } from './ethereum/web3';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const accounts = await web3.eth.getAccounts()
      console.log(accounts)
    })()
  },[])


  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
