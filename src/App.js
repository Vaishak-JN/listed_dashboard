import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dash from './pages/Dash';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import RequireAuth from './components/RequireAuth';

function App() {
  return (

    <Routes>
      <Route index path='/' element={<RequireAuth><Dash /></RequireAuth>} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
