import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' index element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
