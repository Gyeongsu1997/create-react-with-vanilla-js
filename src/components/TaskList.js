/** @jsx React.createElement */
import React from "../core/react.js";
import Card from "./Card.js";

function Task({ task, onToggle, onRemove }) {
  const { title, content, done } = task;

  return (
    <Card>
      <input type="checkbox" checked={done} onClick={onToggle} />
      <h4>{title}</h4>
      <p>{content}</p>
      <button onClick={onRemove}>삭제</button>
    </Card>
  );
}

function TaskList({ tasks, onToggle, onRemove }) {
  return (
    <section>
      {tasks.map(task => (
        <Task
          task={task}
          onToggle={() => onToggle(task.id)}
          onRemove={() => onRemove(task.id)}
        />
      ))}
    </section>
  );
}

export default TaskList;
