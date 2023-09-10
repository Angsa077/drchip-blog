import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePages from './pages/home/HomePages';
import ProjectDetailPage from './pages/projectDetail/ProjectDetailPage';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={ <HomePages /> } />
        <Route index path='/project/:id' element={ <ProjectDetailPage /> } />
      </Routes>
    </div>
  );
}

export default App;
