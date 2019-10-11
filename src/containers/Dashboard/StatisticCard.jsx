import React from "react";
import { Card } from "react-bootstrap";

export default function StatisticCard(props) {
  return (
    <Card
      style={{ width: "18.3rem", backgroundImage: `url(${props.bgImage})` }}
    >
      <Card.Body>
        <div>
          <img alt="Insurance bought" src={props.bulletImage} />
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-description">{props.desc}</p>
      </Card.Body>
    </Card>
  );
}
