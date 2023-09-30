// import { Container } from "./styles";
import { motion } from "framer-motion";
import {
  Container,
  SkillsTechs,
  ContainerInfo,
  AboutMe,
  AnimatedAbout,
} from "./styles";
import { AnimationType } from "../../components/AnimationType/aboutIndex";
import { FadeImg } from "../../styles/globalStyles";
import { fadeInRightVariant } from "../../utils/Variants";
import LeftFadeImg from "../../assets/left.png";
import { TechCards } from "../../components/TechCards";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

export function Sobre() {
  return (
    <div>
      <Container>
        <SkillsTechs>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <TechCards icon={FaReact} techName={"ReactJS"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <TechCards icon={FaJs} techName={"JavaScript"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <TechCards icon={FaNodeJs} techName={"NodeJS"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 2.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <TechCards
              icon={SiStyledcomponents}
              techName={"Styled-Components"}
            />
          </motion.div>
        </SkillsTechs>
        <ContainerInfo
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <AnimatedAbout>
            Sobre <AnimationType />
          </AnimatedAbout>
          <AboutMe>
            Eu sou um programador frontend, procurando me desafiar e me
            aventurar em projetos. Sempre fui apaixonado pelo mundo do T.I,
            sempre me dedicando em aprender coisas novas e entregar não apenas
            projetos mas experiências enriquecidas de paixão e códigos Eu sou um
            programador frontend, procurando me desafiar e me aventurar em
            projetos. Sempre fui apaixonado pelo mundo do T.I, sempre me
            dedicando em aprender coisas novas e entregar não apenas projetos
            mas experiências enriquecidas de paixão e códigos
          </AboutMe>
        </ContainerInfo>
      </Container>
      <FadeImg
        src={LeftFadeImg}
        top={0}
        as={motion.img}
        animate={{
          y: [-100, -300, -100],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="fadeimgRight"
      />
    </div>
  );
}
