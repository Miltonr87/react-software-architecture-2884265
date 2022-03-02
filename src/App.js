import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <h1>Server-Side Rendering Example</h1>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/articles"> Articles </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/articles" component={Articles} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
