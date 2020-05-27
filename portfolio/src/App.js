import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import logo from './img/logo.png'
import profileImg from './img/profile-img.jpg';
import './App.css';

function App() {
  const name = 'B.P.S. Murthi';
  return (
    <div className='App'>
      <Container fluid>
        <div className='header'>
            <a href='https://www.utdallas.edu/' >
              <Image className='logo' src={logo} alt="UTD LOGO" roundedCircle />
            </a>
            <p style={{ margin: '0' }}><strong>The University of Texas at Dallas</strong></p>
        </div>
        <div className='profile'>
          <Row>
            <Col sm='6'>
                <Image className='profile-image' src={ profileImg } alt='profile image' />
            </Col>
            <Col sm='6'>
              <h1>{ name }</h1>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
