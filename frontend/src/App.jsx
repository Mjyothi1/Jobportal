import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile'; // placeholder for now
import Home from './pages/Home'; // optional
import Jobs from "./pages/Jobs";
import PostJob from './pages/PostJob';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </Router>
  );
}

export default App;
