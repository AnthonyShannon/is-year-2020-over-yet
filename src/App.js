import React from 'react';
import IsItOver from './components/IsItOverAnswer'
import './App.css';

function App() {

  let thisYear = new Date().getFullYear()

  return (
    <div className="App">
      <IsItOver
        answer={
          thisYear === 2020 ?
            "NO" :
            "YES"} />
    </div>
  );
}

export default App;
