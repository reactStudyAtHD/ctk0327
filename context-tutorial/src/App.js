import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
/*    <div className="App">
      <ColorBox/>
    </div>*/
    <ColorContext.Provider value={{color: 'red'}}>
        <div>
            <ColorBox/>
        </div>
    </ColorContext.Provider>
  );
}

export default App;
