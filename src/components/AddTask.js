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

function AddTask({ title, content, onChange, onAdd, onCancel }) {
  return (
    <Card>
      <Input
        name="title"
        value={title}
        placeholder="제목을 입력하세요"
        onChange={onChange}
      />
      <TextArea
        name="content"
        placeholder="내용을 입력하세요"
        onChange={onChange}
      >
        {content}
      </TextArea>
      <div>
        <button onClick={onCancel}>취소</button>
        <button onClick={onAdd}>저장</button>
      </div>
    </Card>
  );
}

export default AddTask;
