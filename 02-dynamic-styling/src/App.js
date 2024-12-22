/** @jsx React.createElement */
import React from './core/react.js';
import styled from './core/styled-components.js';

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid;
  border-radius: 50%;
  ${(props) =>
    props.theme === 'black' && 'color: white; background-color: black;'}
  text-align: center;
  line-height: 200px;
`;

function App() {
  return (
    <div>
      <Circle theme="black">Hello, World!</Circle>
      <Circle>안녕하세요</Circle>
    </div>
  );
}

export default App;
