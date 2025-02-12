import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-grey-600);

  @media screen and (max-width: 780px) {
    font-size: 10px;
    gap: 0.1rem;
  }

  @media screen and (max-width: 650px) {
    & > span {
      display: none;
    }
  }

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
`;

export default ButtonIcon;
