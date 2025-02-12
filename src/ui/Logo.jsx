import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../context/useDarkMode";

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
`;

const Img = styled.img`
  height: 3rem;
  width: auto;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    height: 2rem;
    width: 70px;
  }
`;

function Logo() {
  const navigate = useNavigate();

  return (
    <StyledLogo>
      <Img
        src="https://mulberri.io/assets/images/svg/logo.svg"
        alt="Logo"
        onClick={() => navigate("/")}
      />
    </StyledLogo>
  );
}

export default Logo;
