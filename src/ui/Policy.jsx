import styled from "styled-components";
import Heading from "./Heading";
import { HiCircleStack } from "react-icons/hi2";
import { GrTextAlignFull } from "react-icons/gr";
import { useNavigate, useSearchParams } from "react-router-dom";
import DropDown from "./DropDown";
import ListUser from "./ListUser";

const Card = styled.div`
  padding: 20px;
  background: #fff;
  width: 350px;
  height: 250px;
  box-shadow: 0 4px 8px rgba(137, 137, 137, 0.1);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  cursor: pointer;

  @media screen and (max-width: 825px) {
    width: 40rem;
    height: 27rem;
    padding: 2rem;
    gap: 0rem;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 13.3px;
  margin-bottom: 8px;
  position: relative;

  @media screen and (max-width: 825px) {
    font-size: 1.2rem;
  }
`;

const Span = styled.span`
  background-color: ${(props) =>
    props.status === "no"
      ? "#c4dff7"
      : props.status === "active"
      ? "#c8ffe2"
      : "#1e7ce1"};
  border-radius: 0.4rem;
  padding: 0.32rem;
  color: ${(props) =>
    props.status === "no"
      ? "#0094f7"
      : props.status === "active"
      ? "green"
      : "#ffffff"};
`;

const Description = styled.p`
  font-size: 15px;
  color: #555;
  margin: 12px 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;

  @media screen and (max-width: 825px) {
    font-size: 1.7rem;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const formattedDate = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const FootDiv = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: grid;
  grid-template-rows: 1fr 10rem;
  gap: 2rem;
`;

const PolicyCard = ({ policy, idx }) => {
  const navigate = useNavigate();
  const { no, heading, description, status, users } = policy;
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    searchParams.set("id", idx);
    setSearchParams(searchParams);
    navigate(`/policies/${idx}`);
  }

  return (
    <Card>
      <Header>
        <Span status="no">Policy No-{no}</Span>
        <Span status={status === "Active" ? "active" : ""}>
          {status === "Active" ? "Active" : "on Hold"}
        </Span>
        <DropDown policy={policy} />
      </Header>
      <Div onClick={handleClick}>
        <Heading as="h5">{heading}</Heading>
        <Description>{description}</Description>
        <Footer>
          <FootDiv>
            <GrTextAlignFull />
            {formattedDate}
          </FootDiv>
          <ListUser users={users} />
        </Footer>
      </Div>
    </Card>
  );
};

export default PolicyCard;
