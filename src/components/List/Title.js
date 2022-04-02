import React from "react";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";

const TitleUnit = styled.div`
  margin-bottom: 10px;
`;

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

  const onChange = (e) => {
    e.preventDefault();
  };

  return (
    <TitleUnit>
      {open ? (
        <div>
          <InputBase
            value="TODO"
            onChange={onChange}
            onBlur={() => setOpen(!open)}
            autoFocus
          />
        </div>
      ) : (
        <EditTitleContainer>
          <Typo onClick={() => setOpen(!open)}>TODO</Typo>
          <MdMoreHoriz />
        </EditTitleContainer>
      )}
    </TitleUnit>
  );
}

export default Title;
