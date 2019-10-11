import React, { useState } from "react";
import Bullet from "./../../images/bullet.svg";
import { Card, Col, Form, Button } from "react-bootstrap";

export default function ResidenceSetting() {
  const [values, setValues] = useState({
    currentState: "Niger",
    newState: "",
    lgaLive: "",
    fedConsti: "",
    senDistrict: "",
    stateConsti: ""
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
          <span className="section-name">CHANGE STATE OF RESIDENCE</span>
        </div>
        <p style={{ marginTop: "6px", fontSize: "15px" }}>
          Use this section to update your current state of residence.
        </p>
        <Form className="settings-form">
          <Form.Row className="my-2">
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridEmail"
            >
              <Form.Label>CURRENT STATE</Form.Label>
              <Form.Control
                disabled
                type="text"
                value={values.currentState}
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
              <Form.Label>NEW STATE OF RESIDENCE</Form.Label>
              <Form.Control
                type="text"
                name="newState"
                value={values.newState}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridUname"
            >
              <Form.Label>WHAT LGA DO YOU LIVE IN</Form.Label>
              <Form.Control
                type="text"
                name="lgaLive"
                value={values.lgaLive}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridDbirth"
            >
              <Form.Label>FEDERAL CONSTITUENCIES</Form.Label>
              <Form.Control
                type="text"
                name="fedConsti"
                value={values.fedConsti}
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
              <Form.Label>SENETORIAL DISTRICT</Form.Label>
              <Form.Control
                type="text"
                name="senDistrict"
                value={values.senDistrict}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="pr-3"
              controlId="formGridUname"
            >
              <Form.Label>STATE CONSTITUENCIES</Form.Label>
              <Form.Control
                type="text"
                name="stateConsti"
                value={values.stateConsti}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Button className="my-2" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
