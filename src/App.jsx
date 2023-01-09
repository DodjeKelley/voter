import "./App.css";
import React from "react";
import Chart from "./Chart.jsx";
import CommentApp from "./CommentApp.jsx";
// import Cards from "./Cards.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      {/* <div className="App"> */}
      <header className="d-flex justify-content-center">
        <div>
          <h1>Vote.io</h1>
        </div>
      </header>
      <Container>
        <h1>Who will win the Superbowl?</h1>
        <Row>
          <Col>
            <Chart />
          </Col>
          <Col>
            <CommentApp />
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
