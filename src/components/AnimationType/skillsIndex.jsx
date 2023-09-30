import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

const Container = styled.span`
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 37px;
  }
`;

export function AnimationType() {
  return (
    <Container>
      <TypeAnimation
        sequence={["projects", 100, "projets", 100, "projetos", 3000]}
        wrapper="span"
        speed={215}
        style={{
          display: "inline-block",
          fontWeight: "300",
          color: "#1D84B5",
        }}
        repeat={Infinity}
      />
    </Container>
  );
}
