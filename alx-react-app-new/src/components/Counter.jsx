import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px', 
      margin: '20px', 
      border: '2px solid #4CAF50',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: '#333' }}>Counter Application</h2>
      <p style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: count > 0 ? 'green' : count < 0 ? 'red' : 'black',
        margin: '20px'
      }}>
        Current Count: {count}
      </p>
      <div>
        <button 
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button 
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button 
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#008CBA',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
