import React from "react";

export default function PageTitle(props) {
  return (
    <div className={`page-title ${props.className | ""}`}>{props.children}</div>
  );
}
