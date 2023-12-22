//import React, UserList, App.css, SearchAppBar
import React from "react";
import UserList from "./UserList";
import "./App.css";

//import Row, Col, bootstrap.min.css, Container, Nav and Navbar
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

function App() {
  return (
    <>
      {/*Nav Bar*/}
      <Container fluid style={{ borderRadius: "0px" }}>
        <Row style={{ height: "75px", borderRadius: "0px" }}>
          <Navbar
            bg="primary"
            data-bs-theme="dark"
            style={{ borderRadius: "0px" }}
          >
            <Container>
              <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
                API DEMO
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Row>
      </Container>

      {/* Header */}
      <Container>
        <div
          className="app"
          style={{
            width: "100%",
            margin: "30px auto",
            border: "1px solid grey",
            textAlign: "center",
            border: "1px solid rgb(176, 176, 176)",
            backgroundColor: "#fff",
            borderRadius: "0px",
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            padding: "10px",

            paddingLeft: "50px",
            paddingRight: "50px",
            fontSize: "100%",
          }}
        >
          <h3>USER LIST</h3>
        </div>
      </Container>

      {/* body */}
      <Container>
        <div
          className="app"
          style={{
            width: "100%",
            margin: "-20px auto",
            border: "1px solid grey",
            textAlign: "center",
            border: "1px solid rgb(176, 176, 176)",
            backgroundColor: "#fff",
            borderRadius: "1px",
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            padding: "50px",

            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          {/* Render the UserList component */}
          <UserList />
        </div>
      </Container>

      {/*Footer container*/}
      <Container fluid>
        <Row
          style={{
            height: "300px",
            backgroundColor: "#0d6efd",
            textAlign: "center",
            padding: "10px",
            color: "white",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "white",

              fontSize: "100%",
            }}
          >
            copyright @ gomycode 2023. All Rights Reserved.
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
