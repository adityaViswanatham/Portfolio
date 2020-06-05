import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../Header/header';
import university from '../../img/university.png';
import publication from '../../img/publications.png';
import research from '../../img/research.png';
import students from '../../img/students.png';
import profileImg from '../../img/profile-img.jpg';

import Education from '../Education/education';
import Publication from '../Publication/publication';
import Research from '../Research/research';
import Student from '../Student/student';

import './profile.css';

export default ({ name }) => {
    return (
        <div className='profile'>
            <div className='card'>
                <div>
                    <div className='profile-card'>
                        <Image className='profile-image' src={ profileImg } alt='profile image' rounded/>
                        <h1 className='profile-name'>B.P.S. Murthi</h1>
                        <p>Professor, Marketing | Director of Morris Hite Center</p>
                    </div>
                </div>
                <div className='icon-link'>
                    <Row>
                        <Col>
                            <Link to='/education'>
                                <Image className='icon-btn' src={ university } alt="university icon" />
                            </Link>
                            <p className='desc'>Education</p>
                        </Col>
                        <Col>
                            <Link to='/publication'>
                                <Image className='icon-btn' src={ publication } alt="publication icon" />
                            </Link>
                            <p className='desc'>Publications</p>
                        </Col>
                        <Col>
                            <Link to='/research'>
                                <Image className='icon-btn' src={ research } alt="research icon" />
                            </Link>
                            <p className='desc'>Research</p>
                        </Col>
                        <Col>
                            <Link to='/student'>
                                <Image className='icon-btn' src={ students } alt="students icon" />
                            </Link>
                            <p className='desc'>Students</p>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* <UsefulLinks /> */}
            <hr className='new1'/>
            <Header />
            {/* <Education />
            <Publication />
            <Research />
            <Student /> */}
        </div>
    );
};