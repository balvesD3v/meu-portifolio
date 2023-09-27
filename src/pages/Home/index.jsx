import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ContentContainer,
  ProfileContainer,
  IamDeveloper,
  MyDescription,
  LetsTalk,
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Particle,
} from "./styles";
import ParticlesSvg from "../../assets/particle.png";
import { AnimationType } from "../../components/AnimationType";
import { FaArrowRight } from "react-icons/fa";
import { AnimatedLetters } from "../../components/AnimatedLetters";
import { FadeImg } from "../../styles/globalStyles";
import { Navbar } from "../../components/NavBar";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";

import TopFadeImg from "../../assets/top.png";
import LeftFadeImg from "../../assets/left.png";

export function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const hiArray = ["O", "i", ","];
  const nameArray = [
    "e",
    "u",
    " ",
    "s",
    "o",
    "u",
    " ",
    "o",
    " ",
    "p",
    "a",
    "u",
    "l",
    "o",
  ];
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div>
      <Navbar />
      <ContentContainer>
        <ProfileContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={hiArray}
              index={10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={nameArray}
              index={15}
            />
          </h1>
          <IamDeveloper as={motion.p}>
            Sou um <AnimationType />
          </IamDeveloper>

          <MyDescription>
            Sou um desenvolvedor frontEnd, e futuro desenvolvedor full-stack.
            Procurando sempre me superar e me tornar a minha melhor versão.
            <p> Aliás, pode brincar com os triângulos</p>
          </MyDescription>
          <LetsTalk>
            Vamos conversar?
            <FaArrowRight />
          </LetsTalk>
        </ProfileContainer>

        <ShowcaseParticleContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <ShowcaseImageCard>
            <img
              src="https://avatars.githubusercontent.com/u/106263458?s=400&u=04a244fb08c5390440f5e47c88534b9069e16228&v=4"
              alt=""
            />
          </ShowcaseImageCard>
          <Particle
            as={motion.img}
            drag
            animate={{
              x: [86, 26, 86],
              rotate: [180, 270, 180],
              scale: [1, 0.5, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            src={ParticlesSvg}
            top="-80px"
            left="200px"
            rotate="10deg"
          />
          <Particle
            as={motion.img}
            drag
            animate={{
              x: [20, 120, 20],
              rotate: [180, 360, 180],
              scale: [1, 0.5, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            src={ParticlesSvg}
            top="-80px"
            left="20px"
            rotate="270deg"
          />
          <Particle
            as={motion.img}
            drag
            animate={{
              y: [50, 100, 50],
              rotate: [270, 180, 270],
              scale: [1, 0.5, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            src={ParticlesSvg}
            top="75px"
            right="-70px"
            rotate="50deg"
          />
          <Particle
            as={motion.img}
            drag
            animate={{
              y: [0, 100, 0],
              rotate: [90, 360, 90],
              scale: [1, 0.5, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            src={ParticlesSvg}
            bottom="75px"
            left="-70px"
            rotate="53deg"
          />
          <Particle
            as={motion.img}
            drag
            animate={{
              x: [0, 100, 0],
              y: [20, 100, 20],
              rotate: [50, 95, 50],
              scale: [1, 0.5, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            src={ParticlesSvg}
            bottom="-20px"
            right="30px"
            rotate="50deg"
          />
        </ShowcaseParticleContainer>
      </ContentContainer>
      <FadeImg
        src={LeftFadeImg}
        top={0}
        as={motion.img}
        animate={{
          y: [-100, -300, -100],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
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
