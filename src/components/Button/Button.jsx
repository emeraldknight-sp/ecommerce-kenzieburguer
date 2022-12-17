import { StyledButton } from "./Button.style";

export const Button = ({
  children,
  display = "flex",
  variant = "primary",
  size = "medium",
  round,
  ...rest
}) => {
  return (
    <StyledButton display={display} variant={variant} size={size} round={round} {...rest}>
      {children}
    </StyledButton>
  );
};
