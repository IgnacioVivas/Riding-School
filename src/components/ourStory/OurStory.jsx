import { Container, Row, Col } from "react-bootstrap";
import aboutSignature from "../../assets/images/about-signature-img.png";
import about from "../../assets/images/about-img-1.png";
import Classes from "./ourStory.module.scss";

function OurStory() {
  return (
    <Container>
      <Row className={Classes.rowStory}>
        <Col xs={12} lg={6} className={Classes.containerStory}>
          <h2>our story</h2>
          <p>
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum, nec sagittis. Etiam pharetra, erat sed fermentum feugiat,
            velit mauris egestas quam, ut aliquam massa nisl.
          </p>
          <p>
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor.
          </p>
          <img src={aboutSignature} alt="" />
        </Col>

        <Col xs={12} lg={6} className={Classes.containerStoryImg}>
          <img src={about} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
export default OurStory;
