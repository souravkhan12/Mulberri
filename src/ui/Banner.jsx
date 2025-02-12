import styled from "styled-components";
import UserData from "./UserData";

const StyledContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Banner() {
  return (
    <StyledContainer>
      <UserData />
    </StyledContainer>
  );
}

export default Banner;
