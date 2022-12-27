import styled from "styled-components";

export const StyledInput = styled.input`
  width: ${(props) =>
    props.size === "md"
      ? "242px"
      : props.size === "sm"
      ? "142px"
      : props.size === "xs"
      ? ""
      : "100%"};
  padding: 10px;
  border: ${(props) => (props.border ? "1px solid var(--gray-3)" : "none")};
  border-radius: ${(props) => (props.border ? "4px" : "none")};
  outline: none;

  @media only screen and (min-width: 425px) {
    width: ${(props) =>
      props.size === "md"
        ? "300px"
        : props.size === "sm"
        ? "200px"
        : props.size === "xs"
        ? ""
        : "100%"};
  }
`;
