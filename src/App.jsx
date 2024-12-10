import React from 'react';
import Peephole from './components/Peephole';

function App() {
  return (
    <div style={{
      width: '100%',
      margin: 0,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#F1EEE7'
    }}>
      <Peephole />
    </div>
  );
}

export default App;
