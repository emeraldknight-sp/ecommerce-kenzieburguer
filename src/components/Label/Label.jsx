import { StyledLabel } from "./Label.style"

export const Label = ({htmlFor, children}) => {
  return(
    <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
  )
}