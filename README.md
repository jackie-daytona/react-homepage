# Danny Caspary's Web Dev Portfolio - CS 290 Final Project

This full stack MERN (MongoDB, Express.js, React, Node.js) application serves as my final project for CS 290 at Oregon State University. The app showcases what I’ve learned about web development, with a personal twist: it centers around the Green Bay Packers. Users can explore data, add and update entries, and view information using a dynamic interface styled with custom CSS and powered by a full RESTful API.

---

## Frontend

The frontend is built using **React** and structured with React Router for page navigation. Key components include:

- `App.js`: Manages routes and shared state (`game`) across components.
- Pages:
  - `HomePage`: A welcome/landing page
  - `PackersPage`: Displays Packers data pulled from the backend
  - `AddPackersPageTable`: Allows users to add new entries
  - `EditPackersPageTable`: Allows users to update an existing entry
  - `TopicsPage`: A topical/educational page
- `Navigation.js`: Provides consistent site navigation
- Custom CSS (`App.css`): Responsive, earthy design with color variables, flexbox layouts, and accessible forms.

The frontend includes a static `index.html` and uses the `%PUBLIC_URL%` convention for paths to maintain routing compatibility after build.

---

## Backend

The backend is built with **Express.js** and connects to a **MongoDB** database using **Mongoose**. It exposes the following RESTful API routes:

- `GET /packers`: Retrieve all Packers entries
- `GET /packers/:id`: Get one entry by ID
- `POST /packers`: Create a new entry
- `PUT /packers/:id`: Update an entry by ID
- `DELETE /packers/:id`: Delete an entry by ID

The backend supports CORS and parses incoming JSON with middleware. It is designed for simplicity, clarity, and easy extension.

---

## Folder Structure

root
├── client/ # React frontend
│ ├── public/
│ │ └── index.html
│ └── src/
│ ├── App.js
│ ├── App.css
│ ├── components/
│ └── pages/
├── server/ # Express backend
│ ├── models/
│ ├── routes/
│ └── server.js


---

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local or Atlas)

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/dannycaspary/cs290-final-project.git
   cd cs290-final-project

2. Install backend and frontend dependencies:
cd server
npm install

cd ../client
npm install

3. Start the backend:
cd ../server
node server.js

4. Start the frontend:
cd ../client
npm start

By default:

    Frontend runs on http://localhost:3000

    Backend runs on http://localhost:5000

Learning Highlights

    Frontend routing and state management with React Hooks

    Full CRUD backend with Express and MongoDB

    RESTful API design and JSON communication

    Custom CSS with responsive design and accessibility considerations
