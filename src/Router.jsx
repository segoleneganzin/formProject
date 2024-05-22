import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DemoConnection from './pages/DemoConnection';
import DemoRegistration from './pages/DemoRegistration';
import DemoContact from './pages/DemoContact';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/demo-connection' element={<DemoConnection />} />
      <Route path='/demo-registration' element={<DemoRegistration />} />
      <Route path='/demo-contact' element={<DemoContact />} />
      {/* NotFound */}
      <Route path='*' element={<Home />} />
    </Routes>
  );
};

export default Router;
