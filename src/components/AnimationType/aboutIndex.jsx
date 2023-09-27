import { TypeAnimation } from "react-type-animation";

export function AnimationType() {
  return (
    <TypeAnimation
      sequence={["mon", 100, "mym", 100, "mim", 3000]}
      wrapper="span"
      speed={215}
      style={{ fontSize: "37px", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
