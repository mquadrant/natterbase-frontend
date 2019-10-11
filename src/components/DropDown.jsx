import React from "react";
import { Dropdown } from "react-bootstrap";

function CustomToggle(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onClick(e);
  }
  return (
    <a
      href="/#"
      onClick={handleClick}
      style={{
        fontSize: "13px",
        letterSpacing: "0.2px",
        textDecorationLine: "underline",
        color: "#4D0032"
      }}
    >
      {props.children}
    </a>
  );
}
export default function DropDown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {props.title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Make a claim</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2">View Policy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
