import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", border: "1px solid gray", width: "200px" }}>
      <p>Current Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br /><br />

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br /><br />

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
