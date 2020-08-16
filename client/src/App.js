import React from 'react';
import IsItOver from './components/IsItOverAnswer'

const styles = {
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    fontSize: 80
  }
}

function App() {

  console.log("We all know 2020 has been a really really bad year for many.")
  console.log("It will eventually all be over, but at the time of creating this site it is still very much 2020.")
  console.log("Everyone that lived through this year can confirm it was one of the worst years by far, but there is far too much that happened to list it here in the console.")
  console.log("However, the year 2020 will be over eventually. Hopefully by then, we will be back to normal.")
  console.log("anthonyshannon.dev")

  let thisYear = new Date().getFullYear()

  return (
    <div style={styles.text} className="App">
      <IsItOver
        answer={
          thisYear === 2020 ?
            "NO" :
            "YES"} />
    </div>
  );
}

export default App;
