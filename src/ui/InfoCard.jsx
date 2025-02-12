import React from "react";
import { getPolicyById } from "../services/usePolicy";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import ChatCard from "./ChatCard";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10rem;

  @media screen and (max-width: 780px) {
    padding-top: 10rem;
  }
  @media screen and (min-width: 780px) {
    padding-top: 5rem;
  }
`;

function InfoCard() {
  const { id } = useParams();
  const { dataId: info = {}, isLoading } = getPolicyById({ id });

  if (isLoading) return <Spinner />;

  return (
    <StyledContent>
      <ChatCard policy={info} />
    </StyledContent>
  );
}

export default InfoCard;
