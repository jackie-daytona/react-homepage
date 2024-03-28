// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import HomePage from './pages/HomePage.js';
import PackersPage from './pages/PackersPage.js';
import EditPackersPageTable from './pages/EditPackersPageTable.js';
import AddPackersPageTable from './pages/AddPackersPageTable.js';
import TopicsPage from './pages/TopicsPage.js';

// Define the function that renders the content in Routes, using State.
function App() {

  const [game, setGame] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>
            <img src = "./android-chrome-192x192.png" alt="Danny Caspary's Web Dev Portfolio" />
              Danny Caspary's 290 Final Project
            </h1>
            <p>This website serves as a web development portfolio of what I learned in CS 290 at Oregon State.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/packers" element={<PackersPage setGame={setGame}/>} />
                    <Route path="/topics" element={<TopicsPage/>} />
                    <Route path="/create" element={<AddPackersPageTable />} />   
                    <Route path="/update" element={<EditPackersPageTable game={game} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Danny Caspary</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;