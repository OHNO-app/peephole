import React from 'react';
import Peephole from './components/Peephole';

// The page has a small padding all around it, can we make this 100% of the viewport? AI!
function App() {
  return (
    <div style={{
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
