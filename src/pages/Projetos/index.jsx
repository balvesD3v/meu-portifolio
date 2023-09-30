import {
  Container,
  LettersAnimated,
  StyledSlide,
  DivLetters,
  CarouselStyled,
  ImageContainer,
  ProjectInfo,
  TechStackCard,
  Title,
  Github,
  ButtonStyled,
  DescInfo,
  TechContainer,
} from "./styles";
import { motion } from "framer-motion";
import { AnimationType } from "../../components/AnimationType/skillsIndex";
import { projectsDetails } from "../../utils/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub } from "react-icons/fa";
import TopFadeImg from "../../assets/top.png";
import LeftFadeImg from "../../assets/left.png";
import { FadeImg } from "../../styles/globalStyles";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";
import { Button } from "../../components/Button";
import { NavBar } from "../../components/NavBar";

export function Projetos() {
  return (
    <motion.div>
      <NavBar />
      <Container>
        <DivLetters>
          <LettersAnimated>Meus</LettersAnimated>
          <span>
            <AnimationType />
          </span>
        </DivLetters>

        <div>
          <CarouselStyled
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={false}
            useKeyboardArrows={true}
            swipeable={true}
          >
            {projectsDetails.map((project) => (
              <StyledSlide>
                <ProjectInfo key={project.id}>
                  <Title
                    as={motion.div}
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {project.projectName}
                    <Github to={project.projectGithub} target="_blank">
                      <FaGithub />
                    </Github>
                  </Title>
                  <DescInfo>{project.projectDesc}</DescInfo>
                  <TechContainer>
                    {project.techStacks.map((stack, index) => (
                      <TechStackCard key={index}>{stack}</TechStackCard>
                    ))}
                  </TechContainer>
                  <ButtonStyled>
                    <Button
                      title={"Visitar site"}
                      path={project.projectUrl}
                      target={"_blank"}
                    />
                  </ButtonStyled>
                </ProjectInfo>
                <ImageContainer
                  key={project.id}
                  as={motion.div}
                  variants={fadeInRightVariant}
                  initial="hidden"
                  whileInView="visible"
                >
                  <img src={project.projectImg} alt="" />
                </ImageContainer>
              </StyledSlide>
            ))}
          </CarouselStyled>
        </div>
        <FadeImg
          src={TopFadeImg}
          top={0}
          as={motion.img}
          animate={{
            x: [0, 0, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="fadeimgTop"
        />
      </Container>
    </motion.div>
  );
}
