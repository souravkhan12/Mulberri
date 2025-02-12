import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";

import Heading from "./Heading";
import { usePolicies } from "../services/usePolicy";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PolicyDiv = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
`;

function UserData() {
  const { data = [], isLoading } = usePolicies();

  const totalPolicies = data.length;
  const onHold = data.filter((policy) => policy.status !== "Active").length;
  const activePolicy = totalPolicies - onHold;

  return (
    <StyledDiv>
      <Heading as="h1"> Hello, Sourav </Heading>
      <Heading as="h3"> welcome to Mulberri </Heading>
      <PolicyDiv>
        <ButtonIcon as="dot">{totalPolicies} Policy</ButtonIcon>
        <ButtonIcon as="dot" color="blue">
          {onHold} on Hold
        </ButtonIcon>
        <ButtonIcon as="dot" color="green">
          {activePolicy} Active
        </ButtonIcon>
      </PolicyDiv>
    </StyledDiv>
  );
}

export default UserData;
