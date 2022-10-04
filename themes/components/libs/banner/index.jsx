// Libs
import propTypes from "prop-types";
import Image from "next/image";
import { Col } from "antd";
import { motion } from "framer-motion";

// Styles
import s from "./index.module.scss";
import { fading } from "app/database/framer-motion";

function ThemesBanner(props) {
  const { children, imgSrc, className } = props;
  return (
    <motion.div
      variants={fading}
      initial="hidden"
      animate="visible"
      span={24}
      className={s.container + " " + className}
    >
      <Col span={24} className={s.image}>
        <Image src={imgSrc} alt="" layout="fill" objectFit="cover" />
      </Col>
      <Col className={s.contentContainer}>{children}</Col>
    </motion.div>
  );
}

ThemesBanner.propTypes = {
  children: propTypes.node,
  imgSrc: propTypes.string.isRequired,
  className: propTypes.string,
};

export default ThemesBanner;
