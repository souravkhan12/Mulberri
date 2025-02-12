import styled from "styled-components";
import Heading from "./Heading";

const Card = styled.div`
  padding: 13px;
  background: var(--color-grey-200);
  width: 60rem;
  height: 15rem;
  box-shadow: 0 4px 8px rgba(137, 137, 137, 0.1);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  cursor: pointer;

  @media screen and (max-width: 780px) {
    height: 20rem;
    margin-top: 5rem;
    display: grid;
    margin-right: -6%;
    margin-left: 10%;
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 13.3px;
  margin-bottom: 8px;
  position: relative;
`;

const Span = styled.span`
  padding: 0.3rem;
  background-color: ${(props) =>
    props.status === "no"
      ? "#c4dff7"
      : props.status === "active"
      ? "#c8ffe2"
      : "#0094f7"};
  border-radius: 0.4rem;
  color: ${(props) =>
    props.status === "no"
      ? "#0094f7"
      : props.status === "active"
      ? "green"
      : "white"};
`;

const Description = styled.p`
  font-size: 13.3px;
  color: #555;
`;

const ChatCard = ({ policy, idx }) => {
  const { no, heading, description, status } = policy;

  return (
    <Card>
      <Header>
        <Span status="no">Policy No-{no}</Span>
        <Span status={status === "Active" ? "active" : ""}>
          {status === "Active" ? "Active" : "on Hold"}
        </Span>
      </Header>
      <Heading as="h3">{heading}</Heading>
      <Description>{description}</Description>
    </Card>
  );
};

export default ChatCard;
