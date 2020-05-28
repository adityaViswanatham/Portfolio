import React from 'react';
import { Image } from 'react-bootstrap';

import logo from '../../img/logo.png';

import './header.css';

export default () => {
    return (
        <div className='header'>
            <a href='https://www.utdallas.edu/' >
                <Image className='logo' src={ logo } alt="UTD LOGO" roundedCircle />
            </a>
            <p style={{ margin: '5px' }}><strong>The University of Texas at Dallas</strong></p>
        </div>
    );
}