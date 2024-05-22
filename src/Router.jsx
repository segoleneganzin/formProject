import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DemoConnection from './pages/DemoConnection';
import DemoRegistration from './pages/DemoRegistration';
import DemoContact from './pages/DemoContact';
import DemoUpdate from './pages/DemoUpdate';
import DemoFull from './pages/DemoFull';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/demo-connection' element={<DemoConnection />} />
      <Route path='/demo-registration' element={<DemoRegistration />} />
      <Route path='/demo-contact' element={<DemoContact />} />
      <Route path='/demo-update' element={<DemoUpdate />} />
      <Route path='/demo-full' element={<DemoFull />} />
      {/* NotFound */}
      <Route path='*' element={<Home />} />
    </Routes>
  );
};

export default Router;
