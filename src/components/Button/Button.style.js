import styled from "styled-components";

export const StyledButton = styled.button`
  display: ${(props) => (props.display === "none" ? "none" : "flex")};

  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-weight: bolder;

  background-color: ${(props) =>
    props.variant === "text"
      ? "var(--transparent)"
      : props.variant === "secondary"
      ? "var(--color-secondary)"
      : "var(--color-primary)"};

  border: 2px solid
    ${(props) =>
      props.variant === "text"
        ? "var(--transparent)"
        : props.variant === "secondary"
        ? "var(--color-secondary)"
        : "var(--gray-1)"};

  color: ${(props) =>
    props.variant === "text"
      ? "var(--color-primary)"
      : props.variant === "secondary"
      ? "var(--white)"
      : "var(--white)"};

  /* width: ${(props) =>
    props.size === "medium"
      ? "128px"
      : props.size === "small"
      ? "64px"
      : "256px"}; */

  padding: ${(props) =>
    props.size === "medium"
      ? "10px"
      : props.size === "small"
      ? "5pxpx"
      : "20px"};

  height: ${(props) =>
    props.size === "medium"
      ? "40px"
      : props.size === "small"
      ? "30px"
      : "50px"};

  border-radius: ${(props) => (props.round === true ? "50%" : "8px")};

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`;
