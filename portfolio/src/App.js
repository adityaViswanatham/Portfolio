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
      <Container>
        <div>
          
        </div>
         {/* Header */}
         <div className='header'>
            <a href='https://www.utdallas.edu/' >
              <Image className='logo' src={ logo } alt="UTD LOGO" roundedCircle />
            </a>
            <p style={{ margin: '0' }}><strong>The University of Texas at Dallas</strong></p>
        </div>
        <hr />
        {/* Profile */}
        <div className='profile'>
            <Image className='profile-image' src={ profileImg } alt='profile image' />
            <h1 className='profile-name'>{ name }</h1>
            <div className='icon-link'>
              <Row>
                <Col>
                  <Image className='icon-btn' src={ university } alt="university icon" />
                </Col>
                <Col>
                  <Image className='icon-btn' src={ publication } alt="publication icon" />
                </Col>
                <Col>
                  <Image className='icon-btn' src={ research } alt="research icon" />
                </Col>
                <Col>
                  <Image className='icon-btn' src={ students } alt="students icon" />
                </Col>
              </Row>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
