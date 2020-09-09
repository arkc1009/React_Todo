import React from "react";
import styled, { keyframes } from "styled-components";

const Todolist = styled.ul`
  display: flex;
  flex-flow: column;
  padding: 0 80px 80px 80px;
`;

const Cdiv = styled.div`
  width: 100%;
  background-color: white;
  opacity: ${(props) => (props.checked ? "0.3" : "1")};
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px 1px ${(props) => (props.checked ? "salmon" : "grey")};
  transition: transform 0.2s, opacity 1s, box-shadow 1s;
  padding: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Anispan = styled.span`
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
  ${Anispan} {
    opacity: 0%;
  }
  &:hover {
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0px 0px 10px 1px grey;
    width: 250px;
    ${Anispan} {
      animation: ${Textopaup} 1s forwards;
    }
  }
`;

const Checkbtn = styled.button`
  width: 30px;
  height: 30px;
  color: black;
  float: left;
  transition: all 1s, width 0.5s;
  overflow: hidden;
  background-color: powderblue;
  border: 1px solid #fff;
  outline: none;
  ${Anispan} {
    opacity: 0%;
  }
  &:hover {
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0px 0px 10px 1px grey;
    width: 150px;
    ${Anispan} {
      animation: ${Textopaup} 1s forwards;
    }
  }
`;

const Todo = ({ todo, onRemove, onToggle }) => {
  return (
    <Cdiv checked={todo.checked}>
      <b>{todo.title}</b> <br />
      <hr />
      <p>{todo.content}</p>
      <Delbtn onClick={() => onRemove(todo.id)}>
        <Anispan>제거하시겠습니까?</Anispan>
      </Delbtn>
      <Checkbtn onClick={() => onToggle(todo.id)}>
        <Anispan>{todo.checked ? "완료 취소.." : "할일 완료!"}</Anispan>
      </Checkbtn>
    </Cdiv>
  );
};

const TodoList = ({ todos, onRemove, onToggle }) => {
  const todolist = todos.map((todo) => (
    <Todo todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
  ));
  return (
    <div>
      <Todolist>{todolist}</Todolist>
    </div>
  );
};

export default TodoList;
