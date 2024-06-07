// App.js
import ListenDoctor from "./components/ListenDoctor";
import Login from "./components/Login";
import UserDisplay from "./components/UserDisplay";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Render the ListenDoctor component */}

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/listen" element={<ListenDoctor />} />
          <Route path="/user/:id" element={<UserDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
