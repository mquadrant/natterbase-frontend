import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage d-flex justify-content-center align-items-center">
      <Link to="/app/dashboard">
        <Button variant="dark" className="my-2 py-3 px-5" type="submit">
          Visit the Dashboard
        </Button>
      </Link>
    </div>
  );
}
