import styled from "styled-components";

export const StyledButton = styled.button`
  display: ${(props) => (props.display === "none" ? "none" : "flex")};

  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: var(--content-md);
  line-height: var(--line-height-md);
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
    props.size === "lg" ? "10px" : props.size === "sm" ? "2px" : "5px"};

  border-radius: ${(props) => (props.round === true ? "50%" : "8px")};

  width: ${(props) => (props.full ? "100%" : "")};

  height: ${(props) =>
    props.size === "lg" ? "50px" : props.size === "sm" ? "30px" : "40px"};

  font-weight: ${(props) => (props.bold ? "600" : "")};

  @media only screen and (min-width: 1024px) {
    display: ${(props) => (props.variant === "icon" ? "none" : "flex")};
  }
`;
