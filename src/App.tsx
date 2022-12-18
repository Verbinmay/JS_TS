import React from 'react';
import './App.css';
//const names = ['maar','ndd','hdds'];
const users = [{name:'maar'},{name:'ndfd'},{name:'hdds'}];

//const liElements = names.map(n => <li>{n}</li>)
const liElements = users.map((u,i) => <li key={i}>{u.name}</li>)
function App() {
  return (
    <div className="App">
      <ul>
          {liElements}
      </ul>
    </div>
  );
}

export default App;
