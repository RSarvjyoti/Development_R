import { useState } from 'react';
import './styles/app.css';
import Counter from './styles/components/Counter';

function App() {

  const [count, setCount] = useState(0);

  let handleClick = () => {
    setCount( count + 1);
  }

  return (
    <div className='container'>
      <h1>Hii</h1>
      <Counter count={count} onClick= {handleClick} />
      <Counter count={count} onClick= {handleClick}/>
    </div>
  )
}

export default App
