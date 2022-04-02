import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { AddCardState } from "../../atoms";
import InputCard from "./InputCard";

const Paper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  background-color: lightgray;
  :hover {  
      background-color: teal;
`;

const AddCard = styled.div``;

function InputContainer({ listId }) {
  const [open, setOpen] = useRecoilState(AddCardState);

  return (
    <div>
      {open ? (
        <InputCard listId={listId} />
      ) : (
        <Paper onClick={() => setOpen(!open)}>
          <AddCard>{`+ Add a Card `}</AddCard>
        </Paper>
      )}
    </div>
  );
}

export default InputContainer;
