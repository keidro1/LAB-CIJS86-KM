import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import UserDetail from './components/UserDetails';
import UserList from './components/UserList';

 function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
    </BrowserRouter>
  );
};

export default App;
