import { TypeAnimation } from "react-type-animation";

export function AnimationType() {
  return (
    <TypeAnimation
      sequence={["conrsar", 100, "convesar", 100, "conversar?", 3000]}
      wrapper="span"
      speed={215}
      style={{ fontSize: "37px", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
