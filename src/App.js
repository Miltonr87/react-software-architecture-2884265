import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import './App.css';

const BigGreenHeading = styled.h1`
  color: green;
  font-size: 96px;
`;

const App = () => {
  return (
    <>
      <>
        <BigGreenHeading>Server-Side Rendering Example</BigGreenHeading>
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
      </>
    </>
  );
};

export default App;
