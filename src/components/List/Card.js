import React from "react";
import styled from "styled-components";

const CardUnit = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  background-color: white;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.3);
`;

function Card(props) {
  return (
    <CardUnit>
      <span>Making ...</span>
    </CardUnit>
  );
}

export default Card;
