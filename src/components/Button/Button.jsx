import { StyledButton } from "./Button.style";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  bold,
  round,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      bold={bold}
      round={round}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
