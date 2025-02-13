import styled, { css } from "styled-components";
import Policy from "../ui/Policy";
import Spinner from "../ui/Spinner";
import { usePolicies } from "../services/usePolicy";
import AddPolicy from "../features/AddPolicy";
import { useLocation, useParams } from "react-router-dom";
import { usePosts } from "../context/usePostContext";

const StyledContainer = styled.div`
  position: relative;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

const Div = styled.div`
  grid-row: 4 / -1;
  display: flex;
  padding-top: 5rem;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding-inline: 4rem;
`;

const Bdiv = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  @media screen and (max-width: 780px) {
    width: 78%;
    align-self: center;
  }

  @media screen and (min-width: 781px) and (max-width: 1100px) {
    width: 80%;
    align-self: center;
  }

  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    padding-left: 17rem;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 1.3rem;
  }
`;

const PolicyContainer = styled.div`
  background-color: var(--color-grey-50);
  display: flex;
  gap: 4rem;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 780px) {
    ${(props) =>
      props.isPolicyPage &&
      css`
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 1rem;
        overflow-x: auto;
        width: max-content;
        gap: 2rem;
      `};
  }
`;

const Img = styled.img`
  height: 3rem;
  width: 3rem;
`;

const PoliciesContainer = styled.div`
  scrollbar-width: none;
  -ms-overflow-style: none;
  border-right: 1px solid var(--color-grey-100);

  ${(props) =>
    props.isPolicyPage &&
    css`
      overflow-y: auto;
    `};

  @media screen and (max-width: 780px) {
    ${(props) =>
      props.isPolicyPage &&
      css`
        height: 40rem;
        overflow-x: auto;
        white-space: nowrap;
        border-bottom: 1px solid var(--color-grey-100);

        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
          display: none;
        }
      `}
  }
`;

function Policies() {
  const { searchedPosts = [], isLoading } = usePosts();

  const location = useLocation();
  let isPolicyPage = location.pathname.includes("/policies/:");
  const { id } = useParams();
  isPolicyPage = isPolicyPage || id;

  if (isLoading) return <Spinner />;

  return (
    <PoliciesContainer isPolicyPage={isPolicyPage}>
      <StyledContainer>
        <Div>
          <Bdiv>
            <Img src="/verified.png" />
            Your policies
            <AddPolicy />
          </Bdiv>
          <PolicyContainer isPolicyPage={isPolicyPage}>
            {searchedPosts.map((policy, idx) => (
              <Policy policy={policy} idx={idx} key={policy.id} />
            ))}
          </PolicyContainer>
        </Div>
      </StyledContainer>
    </PoliciesContainer>
  );
}

export default Policies;
