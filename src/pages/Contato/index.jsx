import { motion } from "framer-motion";
import {
  Container,
  LeftSideContainer,
  RightSideContainer,
  Button,
  LetsTalk,
} from "./styles";
import contactSvg from "../../assets/undraw_programming_re_kg9v.svg";
import { FadeImg } from "../../styles/globalStyles";
import { Navbar } from "../../components/NavBar";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";
import { AnimationType } from "../../components/AnimationType/contacIndex";

import TopFadeImg from "../../assets/top.png";

export function Contato() {
  return (
    <motion.div>
      <Navbar />
      <Container>
        <LeftSideContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <LetsTalk>
            <h1>
              Vamos{" "}
              <span>
                <AnimationType />
              </span>
            </h1>
            <p>
              Sinta-se a vontade para mandar qualquer mensagem, ficarei grato em
              lhe responder
            </p>
          </LetsTalk>

          <img src={contactSvg} alt="" />
        </LeftSideContainer>
        <RightSideContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <div>
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu e-mail" />
          </div>
          <textarea
            name="message"
            id=""
            placeholder="Digite sua mensagem"
          ></textarea>
          <div>
            <Button>Enviar</Button>
          </div>
        </RightSideContainer>
      </Container>
      <FadeImg
        src={TopFadeImg}
        top={0}
        as={motion.img}
        animate={{
          x: [0, 500, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}
