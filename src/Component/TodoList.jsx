import React from "react";
import styled, { keyframes } from "styled-components";

const Cdiv = styled.div`
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 1px grey;
  transition: transform 0.2s;
  padding: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Anispan_1 = styled.span`
  transition: all 1s;
  `;
const Textopaup = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const Delbtn = styled.button`
  width: 30px;
  height: 30px;
  color: salmon;
  float: right;
  transition: all 1s;
  overflow: hidden;
  background-color: salmon;
  border: 1px solid #fff;
  ${Anispan_1} {
    opacity: 0%;
  }
  &:hover {
    background-color: #fff;
    box-shadow: 0px 0px 10px 1px grey;
    width: 300px;
    ${Anispan_1} {
      animation: ${Textopaup} 1s forwards;
    }
  }
  
`;

const Todolist = styled.ul`
  display: flex;
  flex-flow: column;
  padding: 0 80px 80px 80px;
`;

const Todo = ({ todo, onRemove }) => {
  return (
    <Cdiv>
      <b>{todo.title}</b> <br />
      <hr />
      <p>{todo.content}</p>
      <Delbtn onClick={() => onRemove(todo.id)}><Anispan_1>제거하시겠습니까?</Anispan_1></Delbtn>
    </Cdiv>
  );
};

const TodoList = ({ todos, onRemove }) => {
  const todolist = todos.map((todo) => (
    <Todo todo={todo} key={todo.id} onRemove={onRemove} />
  ));
  return (
    <div>
      <Todolist>{todolist}</Todolist>
    </div>
  );
};

export default TodoList;
