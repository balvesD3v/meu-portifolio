import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

export const Container = styled.span`
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export function AnimationType() {
  return (
    <Container>
      <TypeAnimation
        sequence={["conrsar", 100, "convesar", 100, "conversar?", 3000]}
        wrapper="span"
        speed={215}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </Container>
  );
}
