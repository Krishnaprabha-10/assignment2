
import './App.css';
import Home from './components/home';
import About from './components/about';

import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>    
        <Route path="About" element={<About/>}/>   
         </Routes>
    </div>
  );
}

export default App;
