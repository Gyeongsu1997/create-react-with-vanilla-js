/** @jsx React.createElement */
import React from "../core/react.js";
import styled from "../core/styled-components.js";

const Container = styled.article`
  width: 320px;
  border: 3px outset;
  margin: 10px 0;
  padding: 8px;
  white-space: pre-line;
`;

function Card({ children }) {
  return <Container>{children}</Container>;
}

export default Card;
