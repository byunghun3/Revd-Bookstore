import './App.css';
import About from './components/About/About';
import Browse from './components/Browse/Browse';
import Contact from './components/Contact/Contact';
import { Route, Routes, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/browse'>Browse</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <Routes>
        <Route path='/about' element={About} />
        <Route path='/browse' element={Browse} />
        <Route path='/contact' element={Contact} />
      </Routes>
    </div>
  );
}

export default App;
