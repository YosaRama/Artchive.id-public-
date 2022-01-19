// Libs
import Image from "next/image";
import { Col } from "antd";

// Styles
import s from "./index.module.scss";

function PageArtworkFrame() {
  return (
    <Col span={24} className={s.container}>
      <Col span={24} className={s.image}>
        <Image
          src="/images/artwork-3.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Col>
      <Col className={s.content}>
        <h1 className={s.title}>Artwork Title</h1>
        <p className={s.size}>200 x 200 cm</p>
      </Col>
    </Col>
  );
}

export default PageArtworkFrame;
