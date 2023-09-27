// import { Container } from "./styles";
import { motion } from "framer-motion";
import {
  Container,
  SkillsTechs,
  ContainerInfo,
  AboutMe,
  AnimatedAbout,
  SkillCard,
  IconContainer,
} from "./styles";
import { AnimationType } from "../../components/AnimationType/aboutIndex";
import { skills } from "../../utils/Data";
import { FadeImg } from "../../styles/globalStyles";
import { Navbar } from "../../components/NavBar";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";
import RightFadeImg from "../../assets/right.png";
import LeftFadeImg from "../../assets/left.png";

export function Sobre() {
  return (
    <div>
      <Navbar />
      <Container>
        <SkillsTechs
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {skills.map((skill, index) => {
            return (
              <SkillCard key={index}>
                <IconContainer>{skill.icon}</IconContainer>
                <h4>{skill.tech}</h4>
              </SkillCard>
            );
          })}
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
      />
    </div>
  );
}
