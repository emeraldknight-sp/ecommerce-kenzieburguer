import styled from "styled-components";

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: ${(props) => props.checkbox ? "row-reverse" : "column"};
  justify-content: ${(props) => props.checkbox ? "flex-end" : ""};
  align-items: ${(props) => props.checkbox ? "center" : ""};
  gap: 6px;

  span {
    display: flex;
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
    color: var(--negative);
    gap: 4px;
  }
`;
