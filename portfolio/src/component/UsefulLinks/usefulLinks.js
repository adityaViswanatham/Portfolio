import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';


export default () => {
    return (
        <div className='link-cont'>
            <Container>
                <Row style={{ display: '-webkit-inline-box' }}>
                    <Col lg='4'>
                        <a href='https://jindal.utdallas.edu/marketing/' >
                            <p style={{color:'black', backgroundColor:'#c1e4ff'}}>
                                <span className='highlight-link'>Marketing Area</span>
                            </p>
                        </a>
                    </Col>
                    <Col sm='4'>
                        <a href='https://jindal.utdallas.edu/centers-of-excellence/morris-hite-center-for-marketing/'>
                            <p style={{color: 'black', backgroundColor:'#c1e4ff'}}>
                                <span className='highlight-link'>Morris Hite Center</span>
                            </p>
                        </a>
                    </Col>
                    <Col sm='4'>
                        <a href='https://jindal.utdallas.edu/marketing/forms-conference/'>
                            <p style={{color: 'black', backgroundColor:'#c1e4ff'}}>
                                <span className='highlight-link'>Bass Conference 2020</span>
                            </p>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}