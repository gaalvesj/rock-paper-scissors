import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);


  const game =  () => {
    console.log("game");
  }

  return (
      <div>
        <button onClick={() => game()}>rock</button>
        <button onClick={() => game()}>paper</button>
        <button onClick={() => game()}>scissor</button>
        <h3>You: 0</h3>
        <h3>Computer: 0</h3>
      </div>

  )
}

export default App
