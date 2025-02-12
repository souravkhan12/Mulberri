import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4.8rem;
      font-weight: 350;
    `}

  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 2.5rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.7rem;
      font-weight: 500;
      color: var(--color-grey-500);
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}


    
  @media screen and (max-width: 825px) {
    ${(props) =>
      props.as === "h1" &&
      css`
        font-size: 4rem;
        font-weight: 350;
      `}

    ${(props) =>
      props.as === "h5" &&
      css`
        font-size: 2rem;
        font-weight: 500;
      `}
  ${(props) =>
      props.as === "h2" &&
      css`
        font-size: 1.5rem;
        font-weight: 600;
      `}
    
    ${(props) =>
      props.as === "h3" &&
      css`
        font-size: 1.3rem;
        font-weight: 500;
        color: var(--color-grey-500);
      `}
    
    ${(props) =>
      props.as === "h4" &&
      css`
        font-size: 2.5rem;
        font-weight: 600;
        text-align: center;
      `}
  }

  line-height: 1.4;
`;

export default Heading;
