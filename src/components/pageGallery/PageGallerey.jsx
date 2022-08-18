import { Container, Row, Col } from "react-bootstrap";
import imgOne from "../../assets/images/gallery-img-1.jpg";
import imgTwo from "../../assets/images/gallery-img-2.jpg";
import imgThree from "../../assets/images/gallery-img-3.jpg";
import imgFour from "../../assets/images/gallery-img-4.jpg";
import imgFive from "../../assets/images/gallery-img-5.jpg";
import imgSix from "../../assets/images/gallery-img-6.jpg";
import Classes from "./pageGallery.module.scss";

function PageGallerey() {
  return (
    <Container className={Classes.container}>
      <Row className={Classes.containerImg}>
        <Col xs={12} lg={4}>
          <div>
            <img src={imgOne} alt="" />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div>
            <img src={imgTwo} alt="" />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div>
            <img src={imgThree} alt="" />
          </div>
        </Col>
      </Row>
      <Row className={Classes.containerImg}>
        <Col xs={12} lg={4}>
          <div>
            <img src={imgFour} alt="" />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div>
            <img src={imgFive} alt="" />
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div>
            <img src={imgSix} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default PageGallerey;
