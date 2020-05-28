import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './component/Header/header';
import Profile from './component/Profile/profile';

import './App.css';

function App() {
  const name = 'B.P.S. Murthi';
  return (
    <Container className='App'>
      <Header />
      <hr />
      <Profile name={ name }/>
    </Container>
  );
}

export default App;
