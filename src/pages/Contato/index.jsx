import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Container,
  LeftSideContainer,
  RightSideContainer,
  Button,
  Input,
  LetsTalk,
  SocialWebIcons,
  InputField,
} from "./styles";
import { FadeImg } from "../../styles/globalStyles";
import { Navbar } from "../../components/NavBar";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";
import { AnimationType } from "../../components/AnimationType/contacIndex";
import emailjs from "@emailjs/browser";
import { WebIconText } from "../../components/WebIconText";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFileDownload,
} from "react-icons/fa";

import TopFadeImg from "../../assets/top.png";

export function Contato() {
  const refForm = useRef();

  const sendEmail = (e) => {
    console.log(e);
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailService",
        "template_7pbv09a",
        refForm.current,
        "-As0j9Phd3q2yZHJN"
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
        },
        () => {
          alert("Falha no envio, tente novamente!");
        }
      );
  };

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
              <span>
                <span>Vamos</span> <AnimationType />
              </span>
            </h1>
            <p>
              Sinta-se a vontade para mandar qualquer mensagem, ficarei grato em
              lhe responder
            </p>
            <SocialWebIcons>
              <div>
                <WebIconText
                  icon={FaLinkedin}
                  socialWebName={"Linkedin"}
                  socialWebNickName={"Luiz Paulo Barbosa"}
                  path={"https://www.linkedin.com/in/paulobarbosacode/"}
                />
                <WebIconText
                  icon={FaGithub}
                  socialWebName={"GitHub"}
                  socialWebNickName={"Paulo Barbosa"}
                  path={"https://github.com/BarveraDev"}
                />
              </div>
              <div>
                <WebIconText
                  icon={FaWhatsapp}
                  socialWebName={"WhatsApp"}
                  socialWebNickName={"(84) 99161-5970"}
                  path={"https://encurtador.com.br/giKX0"}
                />
                <WebIconText
                  icon={FaFileDownload}
                  socialWebName={"Meu curriculo"}
                />
              </div>
            </SocialWebIcons>
          </LetsTalk>
        </LeftSideContainer>
        <RightSideContainer
          as={motion.form}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          ref={refForm}
          onSubmit={sendEmail}
        >
          <InputField>
            <Input type="text" placeholder="Seu nome" name="name" required />
            <Input
              type="email"
              placeholder="Seu e-mail"
              name="email"
              required
            />
          </InputField>

          <Input type="text" placeholder="Assunto" name="subject" required />

          <textarea
            name="message"
            id=""
            placeholder="Digite sua mensagem"
            required
          ></textarea>
          <Button type="submit">Enviar</Button>
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
