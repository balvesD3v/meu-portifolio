import { TypeAnimation } from "react-type-animation";

export function AnimationType() {
  return (
    <TypeAnimation
      sequence={["projects", 100, "projets", 100, "projetos", 3000]}
      wrapper="span"
      speed={215}
      style={{
        fontSize: "37px",
        display: "inline-block",
        fontWeight: "300",
        color: "#1D84B5",
      }}
      repeat={Infinity}
    />
  );
}
