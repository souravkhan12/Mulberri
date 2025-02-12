import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";
import Logo from "./Logo";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  background-color: white;
`;

const HR = styled.hr`
  border: none;
  border-top: 2px solid #d3d0d0;
`;

function Header({ handleClick }) {
  return (
    <>
      <Div>
        <Logo />
        <HeaderMenu handleClick={handleClick} />
        <UserAvatar />
      </Div>
      <HR />
    </>
  );
}

export default Header;
