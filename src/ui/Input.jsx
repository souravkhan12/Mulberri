import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
  font-weight: bold;

  @media screen and (max-width: 780px) {
    width: 20vw;
    padding: 0.2rem 1rem;
  }
`;

export default Input;
