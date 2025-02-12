import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
  background: var(--color-grey-100);
  padding: 0.8rem;
  border-radius: 2rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-grey-600);
  border: 1px solid var(--color-grey-300);
  font-size: 1.3rem;

  &:hover {
    background-color: var(--color-grey-100);
    cursor: pointer;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }

  ${(props) =>
    props.as === "dot" &&
    css`
      &::before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.5rem;
        background-color: ${props.color || "red"};
      }
    `}

  ${(props) =>
    props.color === "pink" &&
    css`
      background-color: #d9498c;
      color: white;

      &:hover {
        background-color: #ffadbb;
        color: black;
        cursor: pointer;
      }
    `}
`;

export default ButtonIcon;
