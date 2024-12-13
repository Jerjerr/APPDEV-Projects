import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';

import Background from './components/Background.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Games from './components/Games.jsx';
import Game from './components/Game.jsx';
import Navbar from './components/Navbar.jsx';
import NotFound from './components/NotFound.jsx';

import { Link, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation(); // Get the current route location

  return (
    <>
      <Background />
      <Navbar />
      <br /><br /><br /><br />

      {/* Routes for our application with AnimatePresence */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <PageTransition> <Home /> </PageTransition> } />
          <Route path="/about" element={ <PageTransition> <About /> </PageTransition>} />
          <Route path="/games">
            <Route index element={ <PageTransition> <Games /> </PageTransition> } />
            <Route path=":gameId" element={ <PageTransition> <Game /> </PageTransition>} />
          </Route>
          <Route path="*" element={ <PageTransition> <NotFound /> </PageTransition> } />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default App;
