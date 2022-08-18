import { Container, Row, Col } from "react-bootstrap";
import Classes from "./pageLessons.module.scss";

function PageLessons() {
  return (
    <Container className={Classes.container}>
      <Row className={Classes.row}>
        <Col lg={6}>
          <div className={Classes.containerInformation}>
            <h3>HORSE RIDING PRICES</h3>
            <span className={Classes.spanTitle}>information</span>
            <div className={Classes.divSpace}></div>
            <ul>
              <li>
                <span>Lesson / Rides</span> are rides through Hyde Park with
                tuition if required
              </li>
              <li>
                <span>Private Lesson / Rides</span> are one-to-one with your own
                personal mounted escort
              </li>
              <li>
                <span>Semi-Private Lesson / Rides</span> are a single rider
                paired with one other rider and a shared escort or private group
                of 2 or more. Perfect for couples or riding with friends or
                family. Single riders will be paired up with a rider of similar
                age / experience where possible
              </li>
              <li>
                <span>Group Lesson / Rides</span> can consist of a group of up
                to 8 riders with a shared escort
              </li>
              <li>
                The minimum age limit at the stables is <span>4 years</span>, we
                offer special classes on Monday to Thursday afternoons for
                private arena lessons
              </li>
              <li>
                Adult riders are <span>13 years</span> of age and over
              </li>
              <li>
                The weight limit for riders is{" "}
                <span>13 stone / 180 lb / 80kg</span> – please note our weight
                limits are strictly observed.
              </li>
            </ul>
          </div>
        </Col>

        <Col lg={6}>
          <div className={Classes.prices}>
            <h3>HORSE RIDING PRICES</h3>
            <span className={Classes.spanTitle}>per person, per hour</span>
            <div className={Classes.divSpace}></div>
            <div className={Classes.containerPrices}>
              <div className={Classes.sectionPrices}>
                <div>
                  <h5>PRIVATE LESSON / RIDES</h5>
                  <div className={Classes.ignacio}></div>
                  <h5 className={Classes.numberPrices}>$250</h5>
                </div>
                <span className={Classes.date}>
                  Adults and Children, Saturday, Sunday
                </span>
              </div>
              <div className={Classes.sectionPrices}>
                <div>
                  <h5>SEMI-PRIVATE ARENA LESSONS</h5>
                  <h5 className={Classes.numberPrices}>$220</h5>
                </div>
                <span className={Classes.date}>
                  Adults, maximum of 3, Monday to Friday
                </span>
              </div>
              <div className={Classes.sectionPrices}>
                <div>
                  <h5>PRIVATE ARENA LESSONS</h5>
                  <h5 className={Classes.numberPrices}>$350</h5>
                </div>
                <span className={Classes.date}>
                  Adults and Children, Saturday, Sunday
                </span>
              </div>
              <div className={Classes.sectionPrices}>
                <div>
                  <h5>CHILDREN'S HALF DAY CAMPS</h5>
                  <h5 className={Classes.numberPrices}>$150</h5>
                </div>
                <span className={Classes.date}>
                  Children, maximum of 6, 1 instructor per child, Saturday,
                  Sunday
                </span>
              </div>
              <div className={Classes.sectionPrices}>
                <div>
                  <h5>GROUP SEMI-PRIVATE LESSON / RIDES</h5>
                  <h5 className={Classes.numberPrices}>$200</h5>
                </div>
                <span className={Classes.date}>
                  Adults and Children, Monday to Friday
                </span>
              </div>
              <div className={Classes.sectionPrices}>
                <div>
                  <h5>STABLE MANAGEMENT LECTURES</h5>
                  <h5 className={Classes.numberPrices}>$260</h5>
                </div>
                <span className={Classes.date}>Monday to Sunday</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default PageLessons;
