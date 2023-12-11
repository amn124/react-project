import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Container, Nav, Card } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <div className="App" style={{ backgroundColor: '#f4f4f4', color: '#333' }}>
        {/* Navbar */}
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#">Welcome to My Application</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Content */}
        <Container className="mt-4">
          <h1 style={{ color: '#007bff' }}>Welcome to Your Cards</h1>

          {/* Cards */}
          
          <Card bg="success" text="white" className="mb-3">
  <Card.Body>
    <Card.Title style={{ color: '#dc3545' }}>Card 1</Card.Title>
    <Card.Text>This is card 1 content.</Card.Text>
  </Card.Body>
</Card>

<Card bg="success" text="white" className="mb-3">
  <Card.Body>
    <Card.Title style={{ color: '#dc3545' }}>Card 2</Card.Title>
    <Card.Text>This is card 2 content.</Card.Text>
  </Card.Body>
</Card>

<Card bg="success" text="white">
  <Card.Body>
    <Card.Title style={{ color: '#ffc107' }}>Card 3</Card.Title>
    <Card.Text>This is card 3 content.</Card.Text>
  </Card.Body>
</Card>



        </Container>
      </div>
    </>
  );
};

export default App;
