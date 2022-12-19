import styled from "styled-components";

export const StyledButton = styled.button`
  display: ${(props) => (props.display === "none" ? "none" : "flex")};

  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: var(--content-md);
  line-height: var(--line-height-md);
  /* font-weight: bolder; */
  cursor: pointer;

  background-color: ${(props) =>
    props.variant === "text" || props.variant === "icon"
      ? "var(--transparent)"
      : props.variant === "secondary"
      ? "var(--color-secondary)"
      : "var(--color-primary)"};

  border: 2px solid
    ${(props) =>
      props.variant === "text" || props.variant === "icon"
        ? "var(--transparent)"
        : props.variant === "secondary"
        ? "var(--color-secondary)"
        : "var(--color-primary)"};

  color: ${(props) =>
    props.variant === "text"
      ? "var(--color-primary)"
      : props.variant === "secondary" || props.variant === "primary"
      ? "var(--white)"
      : "var(--gray-4)"};

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

  font-weight: ${(props) => props.bold ? "600" : ""};

  @media only screen and (min-width: 1024px) {
    display: ${(props) => (props.variant === "icon" ? "none" : "flex")};
  }
`;
