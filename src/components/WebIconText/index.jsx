import { motion } from "framer-motion";
import { SocialWeb } from "./styles";

export function WebIconText({
  icon: Icon,
  socialWebNickName,
  socialWebName,
  path,
}) {
  return (
    <SocialWeb>
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
          <h2>{socialWebName}:</h2>
          <span>{socialWebNickName}</span>
        </div>
      </div>
    </SocialWeb>
  );
}
