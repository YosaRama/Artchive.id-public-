// Libs
import { useRouter } from "next/router";
import propTypes from "prop-types";
// import Image from "next/image";
import { Col, Image } from "antd";

// Styles
import s from "./index.module.scss";

function PageArtworkFrame(props) {
  const router = useRouter();
  const { imgSrc, artworkTitle, artworkSize, artworkId } = props;
  return (
    <Col span={24} className={s.container}>
      <Col span={24} className={s.image} onClick={() => router.push(`/artwork/${artworkId}`)}>
        <Image
          src={imgSrc ? imgSrc : "/images/default-images.png"}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          preview={false}
        />
      </Col>
      <Col className={s.content}>
        {artworkTitle && (
          <h1 className={s.title} onClick={() => router.push("/artwork/id")}>
            {artworkTitle}
          </h1>
        )}
        {artworkSize && <p className={s.size}>{artworkSize} cm</p>}
      </Col>
    </Col>
  );
}

PageArtworkFrame.propTypes = {
  artworkId: propTypes.number.isRequired,
  imgSrc: propTypes.string,
  artworkTitle: propTypes.string,
  artworkSize: propTypes.string,
};

export default PageArtworkFrame;
