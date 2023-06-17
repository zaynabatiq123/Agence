import './App.css';
import NavBar from './Component/Nav/NavBar';
import Organigramme from './Organigramme/Organigramme';
import {Routes,Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path='/' element={ <NavBar/>} />
<Route path='/Organigramme' element={<Organigramme/>} />

  </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
