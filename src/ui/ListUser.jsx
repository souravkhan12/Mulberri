import React from "react";
import styled from "styled-components";

const Span = styled.span`
  width: 4rem;
  border-radius: 100%;
  height: 4rem;
  background-color: #dfdfff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -1rem;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
`;

function ListUser({ users }) {
  const capitalizedUsers = users?.map((user) => {
    user = user + "";
    return user[0]?.toUpperCase();
  });
  const user = capitalizedUsers?.slice(0, 3);
  const len = capitalizedUsers?.length;

  return (
    <StyledContainer>
      <div>
        <Container>
          {user?.map((ch, index) => (
            <Span key={index}>{ch}</Span>
          ))}
        </Container>
      </div>
      {len > 3 && "+"}
      {len > 3 ? len - 3 : ""}
    </StyledContainer>
  );
}

export default ListUser;
