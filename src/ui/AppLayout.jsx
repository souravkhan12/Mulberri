import styled from "styled-components";
import Banner from "./Banner";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 7rem 1px 22rem 1fr;
`;

function AppLayout() {
  return (
    <StyledDiv>
      <Header />
      <Banner />
      <Outlet />
    </StyledDiv>
  );
}

export default AppLayout;
