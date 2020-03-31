import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from "./components/ColorBox";
import ColorContext, {ColorProvider} from "./contexts/color";

function App() {
  return (
/*    <div className="App">
      <ColorBox/>
    </div>*/
    <ColorProvider>
        <div>
            <ColorBox/>
        </div>
    </ColorProvider>
  );
}

export default App;
