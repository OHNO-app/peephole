import React from 'react';
import Peephole from './components/Peephole';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#2c2c2c'
    }}>
      <Peephole />
    </div>
  );
}

export default App;