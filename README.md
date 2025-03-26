To-Do App - React + Redux + Local Storage + Authentication
This To-Do Application is built using React.js, Redux Toolkit, and Local Storage, allowing users to register, log in, and manage their tasks efficiently. The application supports task prioritization, persistent storage, real-time weather updates, and protected routes for a smooth user experience.

📌 Features
User Authentication: Register and login functionalities are implemented using localStorage.

Protected Routes: Only authenticated users can access the To-Do list.

Redux-powered Task Management: Users can add, edit, delete, and sort tasks based on priority.

Local Storage Integration: Tasks persist even after a page refresh.

Real-time Weather Information: Fetches live weather updates from the Weather API.

Gradient UI Enhancements: A modern and visually appealing interface.

Netlify Deployment Ready: Configured with \_redirects to handle client-side routing.

🛠️ Technologies Used
This project leverages the following technologies:

Technology Description
React.js ::> JavaScript library for building UI components.
Vite ::> Fast development environment for React apps.
React Router ::> Manages navigation and protected routes.
Redux Toolkit ::> Efficient state management for tasks.
Local Storage ::> Stores user authentication and tasks persistently.
Tailwind CSS ::> Provides a sleek and responsive design.
Weather API::> Fetches real-time weather updates.
Netlify ::>Hosts and deploys the application.
📂 Project Structure
The project follows a structured folder hierarchy:

bash
Copy
Edit
/To-Do-App
│── /public # Stores the \_redirects file for Netlify
│── /src
│ │── /Components
│ │ ├── Navbar.jsx # Navigation bar (Register, Login, Logout)
│ │ ├── Login.jsx # User login form
│ │ ├── Register.jsx # User registration form
│ │ ├── Logout.jsx # Logout functionality
│ │ ├── Todo.jsx # Main To-Do List component
│ │ ├── Weather.jsx # Weather fetching component
│ │ ├── TodoDate.jsx # Displays current date
│ │── /store # Redux store & reducers
│ ├── App.jsx # Routes and protected route handling
│ ├── main.jsx # React entry point
│── /dist # Build folder (generated after running the build command)
│── package.json # Dependencies & scripts
│── vite.config.js # Vite configuration
│── .gitignore # Files to ignore in Git
│── README.md # Project Documentation
📝 User Authentication Flow

1. User Registration
   Users need to enter an email and password to create an account.

Registration data is stored in localStorage.

Upon successful registration, users are redirected to the login page.

2. User Login
   Users enter their email and password to authenticate.

If credentials match the stored user data, an isAuthenticated flag is set in localStorage.

Upon successful login, users are redirected to the To-Do page.

3. Protected Routes
   Users cannot access the To-Do page without logging in.

If an unauthenticated user tries to access /todo, they are redirected to the login page.

4. Logout
   The user can log out, which clears the isAuthenticated flag from localStorage.

After logout, the user is redirected to the login page.

📝 Task Management with Redux
The To-Do list is powered by Redux Toolkit, allowing for efficient task management and state persistence.

Adding a Task: Users can add tasks along with priority selection (High, Medium, Low).

Editing a Task: Users can modify the task content and priority.

Deleting a Task: Users can remove tasks from the list.

Sorting Tasks: Tasks are automatically sorted by priority (High → Medium → Low).

Persistent Storage: Tasks remain even after refreshing the page, as they are stored in localStorage.

🌦️ Weather Integration
The app integrates a Weather API to fetch real-time weather updates. The following weather details are displayed:

City Name

Current Weather Description

Temperature (°C)

Humidity (%)

🚀 Deployment on Netlify
To ensure smooth client-side routing, a \_redirects file is needed inside the public/ folder with the following content:

bash
Copy
Edit
/\* /index.html 200
Deployment Steps:
Build the project

Run the build command to generate a dist folder:

arduino
Copy
Edit
npm run build
Upload the dist folder to Netlify for hosting.

🔮 Future Enhancements
Dark Mode Support for better UI accessibility.

Task Due Dates & Notifications to remind users of deadlines.

Drag & Drop Functionality to reorder tasks easily.

User Authentication with Firebase for improved security.

👨‍💻 Developed By
This project was developed by Shishir Dubey.

If you find this project helpful, star ⭐ the repository and contribute to its growth! 🚀
