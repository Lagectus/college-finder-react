import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-white tracking-wide hover:opacity-90 transition">
          College Finder
        </Link>

        <div className="space-x-6">
          <Link to="/login" className="text-white font-medium hover:text-yellow-300 hover:underline underline-offset-4 transition">
            Login
          </Link>
          <Link to="/signup" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300 transition">
            Signup
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App