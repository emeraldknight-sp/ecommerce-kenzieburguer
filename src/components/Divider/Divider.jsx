import {
  StyledContent,
  StyledDivider,
  StyledDividerGroup,
} from "./Divider.style";

export const Divider = ({ children }) => {
  return (
    <StyledDividerGroup>
      <StyledDivider />
        {children && <StyledContent>{children}</StyledContent>}
      <StyledDivider />
    </StyledDividerGroup>
  );
};
