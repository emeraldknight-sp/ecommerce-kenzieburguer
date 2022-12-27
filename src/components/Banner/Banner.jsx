import { StyledBanner } from "./Banner.style";
import KenzieBurguerBanner from "../../assets/fast-food-01.svg";

export const Banner = () => {
  return (
    <StyledBanner>
      <img src={KenzieBurguerBanner} alt="foods" />
    </StyledBanner>
  );
};
