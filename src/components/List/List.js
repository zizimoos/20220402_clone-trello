import React from "react";
import styled from "styled-components";
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
      </Paper>
    </>
  );
}

export default List;
