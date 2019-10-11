import React, { useState } from "react";
import HorizontalLine from "./../../components/HorizontalLine";
import Bullet from "./../../images/bullet.svg";
import ProfileImage from "./../../images/kal-loftus-596319-unsplash.jpeg";
import { Card, Image, Col, Form, Button } from "react-bootstrap";

export default function PersonalSetting() {
  const [values, setValues] = useState({
    email: "amarachuku@gmail.com",
    fullName: "Olatunji Joseph",
    userName: "Madjozi",
    birthDate: "07 / 15 / 1990",
    currentPassword: "1234445s",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

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
                value={values.email}
                onChange={handleChange}
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
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridUname"
            >
              <Form.Label>USER NAME</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={values.userName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridDbirth"
            >
              <Form.Label>BIRTH DATE</Form.Label>
              <Form.Control
                disabled
                type="text"
                value={values.birthDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Button className="my-2" type="submit" onClick={handleSubmit}>
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
              <Form.Control
                type="password"
                name="currentPassword"
                value={values.currentPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridNewpassword"
            >
              <Form.Label>NEW PASSWORD</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridConPassword"
            >
              <Form.Label>CONFIRM PASSWORD</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Button className="mt-2" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
