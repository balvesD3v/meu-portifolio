import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

const Container = styled.span`
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export function AnimationType() {
  return (
    <Container>
      <TypeAnimation
        sequence={["mon", 100, "mym", 100, "mim", 3000]}
        wrapper="span"
        speed={215}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </Container>
  );
}
