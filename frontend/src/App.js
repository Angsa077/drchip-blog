import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import HomePages from './pages/home/HomePages';
import ProjectDetailPage from './pages/projectDetail/ProjectDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={<HomePages />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
