import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './assets/Home';
import Signup from './assets/Signup';
import Login from './assets/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
https://github.com/ABDULREHMAN135711/Register_Login-page/upload/main
