import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Refs from './pages/Refs';
import DarkModeView from './pages/DarkModeView';
import Lists from './pages/Lists';
import ApiRequest from './pages/ApiRequest';
import Lifecycle from './pages/Lifecycle';
import UseEffect from './pages/UseEffect';
import CustomHooks from './pages/CustomHooks';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
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
