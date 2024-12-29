/** @jsx React.createElement */
import React, { useState } from "../core/react.js";
import Card from "./Card.js";
import AddTask from "./AddTask.js";

function Task({ task, onToggle, onRemove }) {
  const [isEditing, setIsEditing] = useState(false);
  const { title, content, done } = task;

  if (isEditing) {
    return (
      <AddTask
        title={title}
        content={content}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <Card>
      <input type="checkbox" checked={done} onClick={onToggle} />
      <h4>{title}</h4>
      <p>{content}</p>
      <div>
        <button onClick={() => setIsEditing(true)}>수정</button>
        <button onClick={onRemove}>삭제</button>
      </div>
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
