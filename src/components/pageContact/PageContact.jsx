import { Container, Row, Col } from "react-bootstrap";
import Classes from "./pageContact.module.scss";
import map from "../../assets/images/mapa.png";

function PageContact() {
  const stopDefAction = (e) => {
    e.preventDefault();
  };

  return (
    <Container className={Classes.contact}>
      <Row className={Classes.row}>
        <Col lg={6}>
          <div className={Classes.containerMap}>
            <img src={map} alt="" />
          </div>
        </Col>
        <Col lg={6}>
          <div className={Classes.containerContact}>
            <h3>GET IN TOUCH!</h3>
            <p>
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis. Etiam pharetra, erat sed fermentum
              feugiat.
            </p>
            <div className={Classes.formContainer}>
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea placeholder="Text Message" />
                <button onClick={stopDefAction}>SUBMIT</button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default PageContact;
