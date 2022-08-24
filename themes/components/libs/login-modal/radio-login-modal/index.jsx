// Libs
import propTypes from "prop-types";
import Image from "next/image";
import { Card, Col, Radio } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesRadioWithImageModalLogin(props) {
  const { imgSrc, value, className, children } = props;
  return (
    <Radio value={value} className={"radioCard " + className}>
      <Card className={s.card}>
        <Col span={24} className={s.image}>
          <Image
            src={imgSrc ? imgSrc : "/images/default-images.png"}
            alt=""
            layout="fill"
            objectFit="contain"
            className={s.imageRole}
          />
        </Col>
        <Col span={24} className={s.radio}>
          <Radio value={value}>{children}</Radio>
        </Col>
      </Card>
    </Radio>
  );
}

ThemesRadioWithImageModalLogin.propTypes = {
  imgSrc: propTypes.string,
  value: propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
};

export default ThemesRadioWithImageModalLogin;
