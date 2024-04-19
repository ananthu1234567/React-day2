import logo from './logo.svg';
import './App.css';
import C from './components/C';
import { Route, Routes } from 'react-router-dom';
import A from './components/A';
import B from './components/B';
import Data from './components/Data';
import D from './components/D';




function App() {
  return (
    <div className="App">
      <C/>
      <Routes>
      <Route path='/login' element= {<A/>}>
      </Route>
      <Route path='/signup' element= {<B/>}>
      </Route>
      <Route path='/data' element= {<Data/>}>
      </Route>
      <Route path='/text' element= {<D/>}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
