import { StyledForm } from "./Form.style";

export const Form = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};
