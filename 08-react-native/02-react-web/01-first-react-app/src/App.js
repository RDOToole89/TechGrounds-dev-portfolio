import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Refs from './pages/Refs';
import DarkModeView from './pages/DarkModeView';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' index element={<About />} />
        <Route path='/refs' index element={<Refs />} />
        <Route path='/darkmode' index element={<DarkModeView />} />
      </Routes>
    </div>
  );
}

export default App;
