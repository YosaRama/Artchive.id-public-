// Libs
import { useRouter } from "next/router";
import propTypes from "prop-types";
// import Image from "next/image";
import { Badge, Col, Image } from "antd";

// Styles
import s from "./index.module.scss";

function PageArtworkFrame(props) {
  const router = useRouter();
  const { imgSrc, artworkTitle, artworkSize, artworkId, artworkStatus } = props;
  return (
    <Badge.Ribbon
      text={artworkStatus == "SOLD" ? "SOLD" : "Waiting Approval"}
      className={`artwork-ribbon ${artworkStatus == "PUBLISH" && "hide"}`}
    >
      <Col span={24} className={s.container}>
        <Col span={24} className={s.image} onClick={() => router.push(`/artwork/${artworkId}`)}>
          <Image
            src={imgSrc ? imgSrc : "/images/default-images.png"}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            preview={false}
            className={artworkStatus != "PUBLISH" ? `artwork-not-publish` : ""}
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
    </Badge.Ribbon>
  );
}

PageArtworkFrame.propTypes = {
  artworkId: propTypes.number.isRequired,
  imgSrc: propTypes.string,
  artworkTitle: propTypes.string,
  artworkSize: propTypes.string,
  artworkStatus: propTypes.oneOf(["PUBLISH", "SOLD", "DRAFT"]),
};

export default PageArtworkFrame;
