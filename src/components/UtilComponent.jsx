import React from "react";
import { Spinner, Alert } from "react-bootstrap";

export function Loader() {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export function ErrorAlert() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>Something went wrong. Reload page!</p>
    </Alert>
  );
}
