/** @jsx React.createElement */
import React from "../core/react.js";
import styled from "../core/styled-components.js";
import Card from "./Card.js";
const Input = styled.input`
  width: 100%;
  padding: 0;
  margin-bottom: 8px;
  border: 1px inset;
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 0;
  margin-bottom: 8px;
  border: 1px inset;
  height: 4em;
  resize: none;
`;
function AddTask({
  title,
  content,
  onChange,
  onAdd,
  onCancel
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Input, {
    name: "title",
    value: title,
    placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",
    onChange: onChange
  }), /*#__PURE__*/React.createElement(TextArea, {
    name: "content",
    placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694",
    onChange: onChange
  }, content), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel
  }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement("button", {
    onClick: onAdd
  }, "\uC800\uC7A5")));
}
export default AddTask;