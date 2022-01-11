import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Refs from './pages/Refs';
import DarkModeView from './pages/DarkModeView';
import Lists from './pages/Lists';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/refs' element={<Refs />} />
        <Route path='/darkmode' element={<DarkModeView />} />
        <Route path='/lists' element={<Lists />} />
      </Routes>
    </div>
  );
}

export default App;
