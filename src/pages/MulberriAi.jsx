import styled from "styled-components";
import Policies from "./Policies";
import { useParams } from "react-router-dom";
import ButtonIcon from "../ui/ButtonRound";
import InfoCard from "../ui/InfoCard";
import Chatbot from "../ui/Chatbot";
import { getPolicyById } from "../services/usePolicy";

const StyledContainer = styled.div`
  display: grid;
  overflow: hidden;
  background-color: #fff;
  @media screen and (max-width: 780px) {
    grid-template-rows: 45rem 1fr;
  }

  @media screen and (min-width: 790px) {
    grid-template-columns: 45rem 1fr;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10rem;
  padding-top: 2rem;
  gap: 1rem;
  position: relative;
`;
const P = styled.div`
  text-align: center;
  margin-top: 20rem;
  font-size: 3rem;
  font-weight: 500;
`;

const PromptDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;
function MulberriAi() {
  const { id } = useParams();
  const { dataId: info = {}, isLoading } = getPolicyById({ id });

  return (
    <StyledContainer>
      <Policies />
      {id !== ":f" ? (
        <PromptDiv>
          <Div>
            <InfoCard />
            <DivButton>
              <ButtonIcon>Create Certificate</ButtonIcon>
              <ButtonIcon color="pink">
                Create Certificate with a Holder
              </ButtonIcon>
            </DivButton>
          </Div>
          <Chatbot info={info} isLoading={isLoading} />
        </PromptDiv>
      ) : (
        <P> Please Select a Policy</P>
      )}
    </StyledContainer>
  );
}

export default MulberriAi;
