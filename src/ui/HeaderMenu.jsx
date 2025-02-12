import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";

import { RiFileSearchFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 3rem;
  @media screen and (max-width: 767px) {
    gap: 1rem;
  }
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/")}>
          <BsFillGrid3X2GapFill />
          <span>Home</span>
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/policies/:f")}>
          <MdMessage />
          <span>Message</span>
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon>
          <RiFileSearchFill />
          <span>Search</span>
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
