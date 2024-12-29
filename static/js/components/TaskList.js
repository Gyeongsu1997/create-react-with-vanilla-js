/** @jsx React.createElement */
import React, { useState } from "../core/react.js";
import Card from "./Card.js";
import AddTask from "./AddTask.js";
function Task({
  task,
  onToggle,
  onRemove
}) {
  const [isEditing, setIsEditing] = useState(false);
  const {
    title,
    content,
    done
  } = task;
  if (isEditing) {
    return /*#__PURE__*/React.createElement(AddTask, {
      title: title,
      content: content,
      onCancel: () => setIsEditing(false)
    });
  }
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: done,
    onClick: onToggle
  }), /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("p", null, content), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsEditing(true)
  }, "\uC218\uC815"), /*#__PURE__*/React.createElement("button", {
    onClick: onRemove
  }, "\uC0AD\uC81C")));
}
function TaskList({
  tasks,
  onToggle,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("section", null, tasks.map(task => /*#__PURE__*/React.createElement(Task, {
    task: task,
    onToggle: () => onToggle(task.id),
    onRemove: () => onRemove(task.id)
  })));
}
export default TaskList;