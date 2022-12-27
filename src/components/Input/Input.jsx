import { StyledInput } from "./Input.style";

export const Input = ({
  type,
  id,
  name,
  placeholder,
  autoComplete="off",
  size,
  border,
  ...rest
}) => {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      size={size}
      border={border}
      {...rest}
    />
  );
};
