import React from "react";
import styled from "styled-components";

const Inputdiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const Textinput = styled.input`
  margin-bottom: 15px;
`;

const CreateTodo = ({ title, content, onChange, onCreate }) => {
  return (
    <Inputdiv>
      <Textinput
        type="text"
        name="title"
        placeholder="제목을 입력하세요!"
        onChange={onChange}
        value={title}
      />
      <Textinput
        type="text"
        name="content"
        placeholder="내용을 입력하세요!"
        onChange={onChange}
        value={content}
      />
      <button onClick={onCreate}>생성!</button>
    </Inputdiv>
  );
};

export default CreateTodo;
