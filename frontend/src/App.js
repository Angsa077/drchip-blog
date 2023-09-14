import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import HomePages from './pages/home/HomePages';
import ProjectDetailPage from './pages/projectDetail/ProjectDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/screens/Dashboard';
import Comments from './pages/dashboard/screens/comments/Comments';
import NewPost from './pages/dashboard/screens/posts/NewPost';
import ManagePost from './pages/dashboard/screens/posts/ManagePost';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={<HomePages />} />
        <Route path='/project/:slug' element={<ProjectDetailPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='comments' element={<Comments />} />
          <Route path='posts/new' element={<NewPost />} />
          <Route path='posts/manage' element={<ManagePost />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
