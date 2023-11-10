import React from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/Home.css";
export default function Home() {
  return (
    <Container>
      <h1>Welcome to this Website</h1>
      <p>We are here to serve you</p>
      <Button>Get Started</Button>
    </Container>
  );
}
