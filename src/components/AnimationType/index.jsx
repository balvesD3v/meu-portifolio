import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

const Container = styled.span`
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export function AnimationType() {
  return (
    <Container>
      <TypeAnimation
        sequence={["Desenvolvedor", 1500, "Gamer", 1500, "FrontEnder", 1500]}
        wrapper="span"
        speed={5}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </Container>
  );
}
