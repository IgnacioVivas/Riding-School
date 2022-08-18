import React from 'react'
import img1 from '../../assets/images/home-img-1.png'
import img2 from '../../assets/images/home-img-2.png'
import img3 from '../../assets/images/home-img-3.png'
import { Container, Row, Col } from 'react-bootstrap'
import Classes from './abaoutUs.module.scss'

function AbaoutUs() {
    return (
        <Container className='d-flex flex-column align-items-center'>
            <Row className={Classes.titleContainer}>
                <h2>About Us</h2>
                <h5>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, <br /> lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis</h5>
            </Row>
            <Row className={Classes.imgContainer}>
                <Col className={Classes.col} xs={12} lg={4}>
                    <img src={img1} alt="" />
                    <h4>Group Lessons</h4>
                    <span></span>
                    <p>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, alique.</p>

                </Col>
                <Col className={Classes.col} xs={12} lg={4}>
                    <img src={img2} alt="" />
                    <h4>Private Lessons</h4>
                    <span></span>
                    <p>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, alique.</p>
                </Col>
                <Col className={Classes.col} xs={12} lg={4}>
                    <img src={img3} alt="" />
                    <h4>Special Courses</h4>
                    <span></span>
                    <p>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, alique.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default AbaoutUs
