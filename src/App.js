/** @jsx React.createElement */
import React, { useReducer, useState } from "./core/react.js";
import AddTask from "./components/AddTask.js";
import TaskList from "./components/TaskList.js";

let nextId = 2;
const initialState = {
  inputs: {
    title: '',
    content: ''
  },
  tasks: [
    {
      id: 0,
      title: '블로그 포스팅',
      content: '* useReducer\n* 리액트 라우터',
      done: true,
    },
    {
      id: 1,
      title: 'CS 공부하기',
      content: '* 컴퓨터 구조\n* 운영체제',
      done: false,
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'ADD_TASK':
      return {
        inputs: initialState.inputs,
        tasks: [action.task, ...state.tasks]
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? { ...task, done: !task.done } : task
        )
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    default: {
      return state;
    }
  }
}

function App() {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { tasks } = state;
  const { title, content } = state.inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  };

  const onAdd = () => {
    dispatch({
      type: 'ADD_TASK',
      task: {
        id: nextId++,
        title,
        content,
        done: false
      }
    });
    setOpen(false);
  };

  const onToggle = (id) => {
    dispatch({
      type: 'TOGGLE_TASK',
      id
    });
  };

  const onRemove = (id) => {
    dispatch({
      type: 'REMOVE_TASK',
      id
    });
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <div>완료: {tasks.filter(task => task.done).length} / 전체: {tasks.length}</div>
      <br />
      <button onClick={() => setOpen(!open)}>추가</button>
      {open && (
        <AddTask
          title={title}
          content={content}
          onChange={onChange}
          onAdd={onAdd}
          onCancel={() => setOpen(false)}
        />
      )}
      <TaskList tasks={tasks} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
}

export default App;
