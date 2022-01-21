// Libs
import Image from "next/image";
import { Col } from "antd";

// Styles
import s from "./index.module.scss";

function PageBanner(props) {
  const { children } = props;
  return (
    <Col span={24} className={s.container}>
      <Col span={24} className={s.image}>
        <Image src="/images/banner.jpg" alt="" layout="fill" objectFit="cover" />
      </Col>
      <Col className={s.contentContainer}>{children}</Col>
    </Col>
  );
}

export default PageBanner;
