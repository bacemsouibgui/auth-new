import logo from './logo.svg';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes >
    </div>
  );
}

export default App;
