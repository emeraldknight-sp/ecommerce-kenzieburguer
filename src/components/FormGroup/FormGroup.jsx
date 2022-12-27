import { StyledFormGroup } from "./FormGroup.style";

export const FormGroup = ({ children, checkbox }) => {
  return <StyledFormGroup checkbox={checkbox}>{children}</StyledFormGroup>;
};
