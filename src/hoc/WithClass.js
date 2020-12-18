import React from "react";

export const WithClass = (props) => (
  <div className={props.classes}>{props.children}</div>
);
