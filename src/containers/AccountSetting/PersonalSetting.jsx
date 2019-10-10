import React from "react";
import HorizontalLine from "./../../components/HorizontalLine";
import Bullet from "./../../images/bullet.svg";
import ProfileImage from "./../../images/kal-loftus-596319-unsplash.jpeg";
import { Card, Image, Col, Form, Button } from "react-bootstrap";

export default function PersonalSetting() {
  return (
    <Card className="setting-card">
      <Card.Body>
        <div>
          <img alt="bullet" src={Bullet} />
          <span className="section-name">PERSONAL INFORMATION</span>
        </div>
        <p style={{ marginTop: "6px", fontSize: "15px" }}>
          Use this page to update your contact information and change your
          password.
        </p>
        <div className="d-flex p-2 align-items-center">
          <div>
            <Image src={ProfileImage} width="100px" roundedCircle />
          </div>
          <div style={{ marginLeft: "15px" }}>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                letterSpacing: "-0.4px",
                textDecorationLine: "underline",
                color: "#4C0032"
              }}
            >
              Upload a new profile image
            </p>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "16px",
                letterSpacing: "-0.4px",
                color: "#666666",
                marginBottom: "0"
              }}
            >
              Maximum size allowed is 600kb of PNG, JPEG ,JPG.
            </p>
          </div>
        </div>
        <Form className="settings-form">
          <Form.Row className="my-2">
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridEmail"
            >
              <Form.Label>EMAIL ADDRESS</Form.Label>
              <Form.Control
                disabled
                type="email"
                value="amarachuku@gmail.com"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="my-2">
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridFname"
            >
              <Form.Label>FULL NAME</Form.Label>
              <Form.Control type="text" value="Olatunji Joseph" />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridUname"
            >
              <Form.Label>USER NAME</Form.Label>
              <Form.Control type="text" value="Madjozi" />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridDbirth"
            >
              <Form.Label>BIRTH DATE</Form.Label>
              <Form.Control disabled type="text" value="07 / 15 / 1990" />
            </Form.Group>
          </Form.Row>
          <Button className="my-2" type="submit">
            Save Changes
          </Button>
        </Form>
        <HorizontalLine />
        <Form className="settings-form">
          <Form.Row className="my-2">
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridCurpassword"
            >
              <Form.Label>CURRENT PASSWORD</Form.Label>
              <Form.Control type="password" value="1234445s" />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridNewpassword"
            >
              <Form.Label>NEW PASSWORD</Form.Label>
              <Form.Control type="password" value="" />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridConPassword"
            >
              <Form.Label>CONFIRM PASSWORD</Form.Label>
              <Form.Control type="password" value="" />
            </Form.Group>
          </Form.Row>
          <Button className="mt-2" type="submit">
            Save Changes
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
