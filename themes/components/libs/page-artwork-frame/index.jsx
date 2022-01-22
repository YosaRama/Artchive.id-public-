// Libs
import propTypes from "prop-types";
import Image from "next/image";
import { Col } from "antd";

// Styles
import s from "./index.module.scss";

function PageArtworkFrame(props) {
  const { imgSrc, artworkTitle, artworkSize } = props;
  return (
    <Col span={24} className={s.container}>
      <Col span={24} className={s.image}>
        <Image
          src={imgSrc ? imgSrc : "/images/default-images.png"}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Col>
      <Col className={s.content}>
        {artworkTitle && <h1 className={s.title}>{artworkTitle}</h1>}
        {artworkSize && <p className={s.size}>{artworkSize} cm</p>}
      </Col>
    </Col>
  );
}

PageArtworkFrame.propTypes = {
  imgSrc: propTypes.string,
  artworkTitle: propTypes.string,
  artworkSize: propTypes.string,
};

export default PageArtworkFrame;
