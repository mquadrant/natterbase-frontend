import React from "react";

export default function Spacer(props) {
  return <div style={{ height: `${props.size | "20"}px` }}></div>;
}
