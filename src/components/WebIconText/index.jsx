import { motion } from "framer-motion";
import { SocialWeb } from "./styles";
import curriculo from "../../assets/Curriculo BR.pdf";

export function WebIconText({
  icon: Icon,
  socialWebNickName,
  socialWebName,
  path,
}) {
  const handleDownloadCv = () => {
    window.open(curriculo, "_blank");
  };
  return (
    <SocialWeb onClick={handleDownloadCv}>
      <div className="container">
        <motion.a
          className="icon-bg"
          target="_blank"
          as={motion.a}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={path}
        >
          {Icon && <Icon size={20} />}
        </motion.a>
        <div className="social-web">
          <h2>{socialWebName}</h2>
          <span>{socialWebNickName}</span>
        </div>
      </div>
    </SocialWeb>
  );
}
