import { StrictMode } from 'react';
import './Todo.css';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import myStore from './store/index.js';
import App from './App.jsx'; // Assuming App is your Home component
import { BrowserRouter } from 'react-router-dom';
//import { Todo } from './Components/Todo.jsx';
// Assuming Todo is your task management component

// Define routes
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);