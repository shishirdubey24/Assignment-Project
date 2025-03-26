/* eslint-disable react/prop-types */
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import Redux store
import "./Todo.css";

import { Login } from "./Components/Login";
import {Regester} from "./Components/Regester"
import { Logout } from "./Components/Logout";
import { Todo } from "./Components/Todo";
import Navbar from "./Components/Navbar";

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* ✅ Show Navbar only if user is authenticated */}
        {localStorage.getItem("isAuthenticated") === "true" && <Navbar />}

        <Routes>
          {/* Redirect to Register First */}
          <Route path="/" element={<Navigate to="/register" />} />

          {/* Public Routes */}
          <Route path="/register" element={<Regester />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* ✅ Protected Route (Only for Logged-in Users) */}
          <Route
            path="/todo"
            element={
              <ProtectedRoute>
                <Todo />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
