import { TypeAnimation } from "react-type-animation";

export function AnimationType() {
  return (
    <TypeAnimation
      sequence={[
        "Desenvolvedor",
        1500,
        "Desenvolvedor frontEnd",
        1500,
        "Apaixonado por programar",
        1500,
      ]}
      wrapper="span"
      speed={5}
      style={{ fontSize: "31px", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
