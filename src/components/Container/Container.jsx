import { StyledContainer } from "./Container.style";

export const Container = ({ children, direction = "row" }) => {
  return <StyledContainer direction={direction}>{children}</StyledContainer>;
};
