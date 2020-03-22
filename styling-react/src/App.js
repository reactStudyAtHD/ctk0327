import React from 'react';
import logo from './logo.svg';
import './App.css';
import StyledComponent from "./StyledComponent";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";

function App() {
  return (
    <div className="App">
      {/*<CSSModule inverted/>*/}
      <StyledComponent/>
    </div>
  );
}

export default App;
