import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './component/Header/header';
import Profile from './component/Profile/profile';

import './App.css';

function App() {
  const name = 'B.P.S. Murthi';
  return (
    <div className='App'>
      <Container>
        <Header />
        <hr />
        <Profile name={ name }/>
      </Container>
    </div>
  );
}

export default App;
