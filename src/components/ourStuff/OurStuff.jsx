import React from 'react'
import team1 from '../../assets/images/home-team-1.png'
import team2 from '../../assets/images/home-team-2.png'
import team3 from '../../assets/images/home-team-3.png'
import team4 from '../../assets/images/home-team-4.png'
import Classes from './ourStuff.module.scss';
import { Container, Row, Col, TabContainer } from 'react-bootstrap';

function OurStuff() {
    return (
        <Container className={Classes.contOurStuff}>
            <Row className={Classes.rowTop}>
                <h2>Our Stuff</h2>
                <h5>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem <br /> quis bibendum auctor, nisi elit consequat ipsum, nec sagittis</h5>
            </Row>
            <Row className={Classes.rowBottom}>
                <Col xs={12} sm={6} lg={3}>
                    <img src={team1} alt="" />
                    <h4>Sarah Weber</h4>
                    <span>instructor</span>
                    <p>800-122-4960</p>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <img src={team2} alt="" />
                    <h4>Kathleen Ryan</h4>
                    <span>instructor</span>
                    <p>800-122-4960</p>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <img src={team3} alt="" />
                    <h4>Anna Powell</h4>
                    <span>instructor</span>
                    <p>800-122-4960</p>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <img src={team4} alt="" />
                    <h4>Betty Miller</h4>
                    <span>instructor</span>
                    <p>800-122-4960</p>
                </Col>
            </Row>
        </Container>
        // <div className="container">
        //     <div className="row">
        //         <h2>Our Stuff</h2>
        //         <h5>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis</h5>
        //     </div>
        //     <div className="row">
        //         <div className="div col-12 col-sm-6 col-lg-3">

        //         </div>
        //         <div className="div col-12 col-sm-6 col-lg-3">

        //         </div>
        //         <div className="div col-12 col-sm-6 col-lg-3">

        //         </div>
        //         <div className="div col-12 col-sm-6 col-lg-3">

        //         </div>
        //     </div>
        // </div>
    )
}

export default OurStuff
