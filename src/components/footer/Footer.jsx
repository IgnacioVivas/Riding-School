import React from "react";
import Classes from "./footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import imgFooter from "../../assets/images/footer-logo.png";

function Footer() {
  return (
    <div className={Classes.footer}>
      <Container fluid className={Classes.footerTop}>
        <Row className={Classes.contTitleButon}>
          <Col
            className="d-flex justify-content-center"
            xs={12}
            sm={12}
            lg={7}
            xl={5}
          >
            <h3>
              RIDE IN STYLE! <span>Giving You The Wings You Need.</span>
            </h3>
          </Col>
          <Col
            className="d-flex justify-content-center"
            xs={12}
            sm={12}
            lg={3}
            xl={2}
          >
            <button>START TODAY</button>
          </Col>
        </Row>
      </Container>
      <Container className={Classes.contFooter}>
        <Row className={Classes.rowBottom}>
          <Col xs={12} sm={6} lg={3} className={Classes.columnas}>
            <img src={imgFooter} alt="" />
            <p>
              A Farm Where You And Your Horse Will Feel At Home. Beyond Your
              Dreams. Within Your Reach.
            </p>
          </Col>
          <Col xs={12} sm={6} lg={3} className={Classes.columnas}>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>{" "}
              </li>
              <li>
                <a href="">LESSONS</a>{" "}
              </li>
              <li>
                <a href="">GALLERY</a>{" "}
              </li>
              <li>
                <a href="">CONTACT</a>{" "}
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} lg={3} className={Classes.columnas}>
            <h3>Redes Sociales</h3>
            <div className={Classes.contRedes}>
              <i className="ri-instagram-line"></i>
              <i className="ri-facebook-fill"></i>
              <i className="ri-twitter-fill"></i>
              <i className="ri-pinterest-fill"></i>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} className={Classes.columnas}>
            <h3>Newsletter</h3>
            <div className={Classes.contNewsletter}>
              <input type="text" value="Your Email..." />
              <button>SEND</button>
            </div>
            <span>Copyright © 2021 | Ignacio Vivas</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
