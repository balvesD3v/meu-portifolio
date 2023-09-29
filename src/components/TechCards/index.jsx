import { SkillCard, IconContainer } from "./styles";

export function TechCards({ icon: Icon, techName }) {
  return (
    <SkillCard>
      <IconContainer>{Icon && <Icon size={20} />}</IconContainer>
      <h4>{techName}</h4>
    </SkillCard>
  );
}
