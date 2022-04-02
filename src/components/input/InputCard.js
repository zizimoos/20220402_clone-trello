import React, { useContext, useState } from "react";
import { useRecoilState } from "recoil";
import { AddCardState } from "../../atoms";
import styled from "styled-components";
import { BiX } from "react-icons/bi";
import storeApi from "../../utils/storeApi";

const Paper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  background-color: white;
`;
const InputBase = styled.textarea`
  width: 100%;
  rows: 2;
  cols: 20;
  border: none;
  resize: none;
`;

const AddCardBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
  span {
    display: inline-block;
    margin-right: 10px;
  }
`;
const AddCardButton = styled.button`
  margin-right: 5px;
  padding: 7px;
  border: none;
  border-radius: 5px;
  background-color: teal;
  &:hover {
    background-color: lightgray;
    transition: 1s;
  }
`;

function InputCard({ listId }) {
  const [open, setOpen] = useRecoilState(AddCardState);
  const { addMoreCard } = useContext(storeApi);
  const [cardTitle, setCardTitle] = useState("");
  const onChange = (e) => {
    setCardTitle(e.target.value);
  };
  const handleConfirm = (e) => {
    addMoreCard(cardTitle, listId);
    setOpen(!open);
  };
  return (
    <>
      <div>
        <Paper>
          <InputBase
            // onBlur={() => setOpen(!open)}
            placeholder="Enter a title of this card"
            value={cardTitle}
            onChange={onChange}
          ></InputBase>
        </Paper>
      </div>
      <AddCardBox>
        <AddCardButton onClick={handleConfirm}>Add CARD</AddCardButton>
        <BiX
          onClick={() => setOpen(!open)}
          style={{ fontSize: "25", color: "black" }}
        />
      </AddCardBox>
    </>
  );
}

export default InputCard;
