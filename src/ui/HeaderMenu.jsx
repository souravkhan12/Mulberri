import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";

import { RiFileSearchFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { usePosts } from "../context/usePostContext";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 767px) {
    gap: 1rem;
  }
`;

const StyledInput = styled.input`
  width: 10rem;
  z-index: 3;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  outline: none;
  &:focus {
    width: 18rem;
  }
  @media (min-width: 640px) {
    width: 20rem;
    &:focus {
      width: 18rem;
    }
  }
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const { searchQuery, setSearchQuery } = usePosts();

  const ref = useOutsideClick(setSearchOpen);

  function handleSearch() {
    setSearchOpen(!searchOpen);
    setSearchQuery("");
  }

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon
          onClick={() => {
            setSearchQuery("");
            navigate("/");
          }}
        >
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
        {searchOpen ? (
          <StyledInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search policies..."
            type="text"
            ref={ref}
          />
        ) : (
          <ButtonIcon onClick={handleSearch}>
            <RiFileSearchFill />
            <span>Search</span>
          </ButtonIcon>
        )}
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
