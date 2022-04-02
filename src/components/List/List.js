import React from "react";
import styled from "styled-components";
import InputContainer from "../input/InputContainer";
import Card from "./Card";
import Title from "./Title";

const Paper = styled.div`
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  background-color: lightgray;
`;
function List(props) {
  return (
    <>
      <Paper>
        <Title />
        <Card />
        <Card />
        <Card />
        <InputContainer />
      </Paper>
    </>
  );
}

export default List;
