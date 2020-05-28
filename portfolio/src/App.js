import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import logo from './img/logo.png'
import profileImg from './img/profile-img.jpg';
import publication from './img/publications.png';
import university from './img/university.png';
import research from './img/research.png';
import students from './img/students.png';
import './App.css';

function App() {
  const name = 'B.P.S. Murthi';
  return (
    <div className='App'>
        {/* Header */}
        <div className='header'>
            <a href='https://www.utdallas.edu/' >
              <Image className='logo' src={ logo } alt="UTD LOGO" roundedCircle />
            </a>
            <p style={{ margin: '0' }}><strong>The University of Texas at Dallas</strong></p>
        </div>

        {/* Profile */}
        <div className='profile'>
          <Container>
            <Row>
              <Col>
                  <Image className='profile-image' src={ profileImg } alt='profile image' />
              </Col>
              <Col>
                <h1>{ name }</h1>
              </Col>
            </Row>
          </Container>
        </div>

        {/* References */}
        <Container>
          <Row>
            <Col>
              <Image style={{width: '2rem', height: '2rem'}} src={ university } alt="university icon" thumbnail />
            </Col>
            <Col>
              <Image style={{width: '2rem', height: '2rem'}} src={ publication } alt="publication icon" thumbnail />
            </Col>
            <Col>
              <Image style={{width: '2rem', height: '2rem'}} src={ research } alt="research icon" thumbnail />
            </Col>
            <Col>
              <Image style={{width: '2rem', height: '2rem'}} src={ students } alt="students icon" thumbnail />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
