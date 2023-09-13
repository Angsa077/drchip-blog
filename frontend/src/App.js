import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import HomePages from './pages/home/HomePages';
import ProjectDetailPage from './pages/projectDetail/ProjectDetailPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={<HomePages />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
