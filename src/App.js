import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Browse from './components/Browse/Browse';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/about' element={About} />
        <Route path='/browse' element={Browse} />
        <Route path='/contact' element={Contact} />
      </Routes>
    </div>
  );
}

export default App;
