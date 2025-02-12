import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: white;
  padding: 2.5rem 4rem;
  margin: 5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-md);
  width: 70%; /* Full width */

  @media screen and (max-width: 767px) {
    right: 2rem;
    border-radius: 8px 8px 0 0;
    width: auto;
  }
`;

const Input = styled.input`
  width: 90%;
  height: 8rem;
  background-color: var(--color-grey-100);
  border: none;
  padding: 2rem;
  border-radius: var(--border-radius-lg);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
`;

const Button = styled.button`
  background-color: #2461c3;
  color: white;
  padding: 0.5rem;
  border-radius: 2rem;
  width: 12rem;
  border: none;
  font-size: 1.5rem;
`;

const Tag = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 1rem;
  gap: 2rem;
`;

const Img = styled.img`
  height: 2rem;
`;

const Span = styled.span`
  background-color: var(--color-grey-200);
  color: grey;
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
`;

function Chatbot({ info, isLoading }) {
  return (
    <StyledContainer>
      <Tag>
        <Img src="https://mulberri.io/assets/images/svg/logo.svg" alt="Logo" />
        <Span>Policy No {isLoading ? "...." : info?.no} x</Span>
      </Tag>
      <Div>
        <Input type="text" placeholder="Type your prompts here " />
        <Button>Send</Button>
      </Div>
    </StyledContainer>
  );
}

export default Chatbot;
