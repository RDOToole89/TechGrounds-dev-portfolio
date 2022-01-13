import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Counter from './pages/Counter';
import Refs from './pages/Refs';
import DarkModeView from './pages/DarkModeView';
import Lists from './pages/Lists';
import ApiRequest from './pages/ApiRequest';
import Lifecycle from './pages/Lifecycle';
import UseEffect from './pages/UseEffect';
import CustomHooks from './pages/CustomHooks';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/darkmode') {
      document.body.classList.remove('dark');
    }
  }, [location]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/refs' element={<Refs />} />
        <Route path='/darkmode' element={<DarkModeView />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/lifecycle' element={<Lifecycle />} />
        <Route path='/useeffect' element={<UseEffect />} />
        <Route path='/customhooks' element={<CustomHooks />} />
        <Route path='/api' element={<ApiRequest />} />
      </Routes>
    </div>
  );
}

export default App;
