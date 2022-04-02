import React from "react";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";

const EditTitleContainer = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Typo = styled.div``;
const InputBase = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: none;
  background-color: gray;
`;

function Title(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {open ? (
        <div>
          <InputBase value="TODO" onBlur={() => setOpen(!open)} />
        </div>
      ) : (
        <EditTitleContainer>
          <Typo onClick={() => setOpen(!open)}>TODO</Typo>
          <MdMoreHoriz />
        </EditTitleContainer>
      )}
    </>
  );
}

export default Title;
