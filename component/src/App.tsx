import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './assets/scss/app.scss';
import { updateReducers } from './redux/store/store';

function App() {

  // const data= exportAllReducers()
  const data = "ji"

  useEffect(() => {
    if (data) {
      // const newReducers = updateReducers(data); 
    }
  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
