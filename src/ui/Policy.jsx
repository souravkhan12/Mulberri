import styled from "styled-components";
import Heading from "./Heading";
import { HiCircleStack } from "react-icons/hi2";
import { GrTextAlignFull } from "react-icons/gr";
import { useNavigate, useSearchParams } from "react-router-dom";
import PolicyDropDown from "../ui/PolicyDropDown";

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

  @media screen and (min-width: 690px) and (max-width: 825px) {
    width: 500px;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 13.3px;
  margin-bottom: 8px;
  position: relative;

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;

const Span = styled.span`
  background-color: ${(props) =>
    props.status === "no"
      ? "#c4dff7"
      : props.status === "active"
      ? "#c8ffe2"
      : "#6287AF"};
  border-radius: 0.4rem;
  padding: 0.32rem;
  color: ${(props) =>
    props.status === "no"
      ? "#0094f7"
      : props.status === "active"
      ? "green"
      : "blue"};
`;

const Description = styled.p`
  font-size: 15px;
  color: #555;
  margin: 12px 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
`;

const Menu = styled.div`
  position: absolute;
  margin-left: 90%;
  margin-top: -0.3rem;
  & svg {
    width: 2rem;
    height: 2rem;
  }
  &:hover {
    cursor: pointer;
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

const PolicyCard = ({ policy, idx }) => {
  const navigate = useNavigate();
  const { no, heading, description, status } = policy;
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
        {/* <Modal>
          <Modal.Open opens="menu-form">
            <Menu>
              <BsThreeDots policy={policy} />
            </Menu>
          </Modal.Open>
          <Modal.Window name="menu-form">
            <PolicyForm policyToEdit={policy} />
          </Modal.Window>
        </Modal> */}
        <PolicyDropDown />
      </Header>
      <Heading as="h5">{heading}</Heading>
      <Description onClick={handleClick}>{description}</Description>
      <Footer>
        <FootDiv>
          <GrTextAlignFull />
          {formattedDate}
        </FootDiv>
        <span>
          <HiCircleStack />
          <HiCircleStack />
          <HiCircleStack />
        </span>
      </Footer>
    </Card>
  );
};

export default PolicyCard;
