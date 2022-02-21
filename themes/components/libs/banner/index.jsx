// Libs
import propTypes from "prop-types";
import Image from "next/image";
import { Col } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesBanner(props) {
  const { children, imgSrc, className } = props;
  return (
    <Col span={24} className={s.container + " " + className}>
      <Col span={24} className={s.image}>
        <Image src={imgSrc} alt="" layout="fill" objectFit="cover" />
      </Col>
      <Col className={s.contentContainer}>{children}</Col>
    </Col>
  );
}

ThemesBanner.propTypes = {
  children: propTypes.node,
  imgSrc: propTypes.string.isRequired,
  className: propTypes.string,
};

export default ThemesBanner;
