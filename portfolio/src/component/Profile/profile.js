import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

import Header from '../Header/header';
import university from '../../img/university.png';
import publication from '../../img/publications.png';
import research from '../../img/research.png';
import students from '../../img/students.png';
import profileImg from '../../img/profile-img.jpg';
import './profile.css';

export default ({ name }) => {
    return (
        <div className='profile'>
            <Image className='profile-image' src={ profileImg } alt='profile image' rounded/>
            <h1 className='profile-name'>{ name }</h1>
            <p>
                Professor, 
                <a href='https://jindal.utdallas.edu/marketing/'> Marketing </a>
                | Director,
                <a href='https://jindal.utdallas.edu/centers-of-excellence/morris-hite-center-for-marketing/'> Morris Hite Center
                </a>
            </p>
            <Header />
            <hr className='new1'/>
            {/* <UsefulLinks /> */}
            <div className='icon-link'>
                <Row>
                    <Col>
                        <Image className='icon-btn' src={ university } alt="university icon" />
                        <p className='desc'><strong>Education</strong></p>
                    </Col>
                    <Col>
                        <Image className='icon-btn' src={ publication } alt="publication icon" />
                        <p className='desc'><strong>Publications</strong></p>
                    </Col>
                    <Col>
                        <Image className='icon-btn' src={ research } alt="research icon" />
                        <p className='desc'><strong>Research</strong></p>
                    </Col>
                    <Col>
                        <Image className='icon-btn' src={ students } alt="students icon" />
                        <p className='desc'><strong>Students</strong></p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};