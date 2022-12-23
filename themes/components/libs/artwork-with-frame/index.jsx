// Libs
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { Badge, Col, Image } from "antd";

// Styles
import s from "./index.module.scss";

// Assets
import { VerifyIcon } from "public/icons/verify-icon";

function ThemesArtworkWithFrame(props) {
  const router = useRouter();
  const { imgSrc, artworkTitle, artworkSize, artworkSlug, artworkStatus, isCuratorPick } = props;
  return (
    <Badge.Ribbon
      text={artworkStatus == "SOLD" ? "SOLD" : "Waiting Approval"}
      className={`artwork-ribbon ${
        (artworkStatus == "PUBLISH" || artworkStatus == "EXHIBITION") && "hide"
      }`}
    >
      <Col span={24} className={s.container}>
        <Col span={24} className={s.image} onClick={() => router.push(`${artworkSlug}`)}>
          <Image
            src={imgSrc ? imgSrc : "/images/default-images.png"}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            preview={false}
            className={
              artworkStatus == "PUBLISH" || artworkStatus == "EXHIBITION"
                ? ""
                : `artwork-not-publish`
            }
          />
        </Col>
        <Col className={s.content}>
          {artworkTitle && (
            <h1 className={s.title} onClick={() => router.push(`${artworkSlug}`)}>
              {artworkTitle}
              {isCuratorPick ? (
                <span className={s.curatorBadge}>
                  <VerifyIcon />
                </span>
              ) : null}
            </h1>
          )}
          {artworkSize && <p className={s.size}>{artworkSize} cm</p>}
        </Col>
      </Col>
    </Badge.Ribbon>
  );
}

ThemesArtworkWithFrame.propTypes = {
  artworkSlug: propTypes.string.isRequired,
  imgSrc: propTypes.string,
  artworkTitle: propTypes.string,
  artworkSize: propTypes.string,
  artworkStatus: propTypes.oneOf(["PUBLISH", "SOLD", "DRAFT", "EDIT"]),
  isCuratorPick: propTypes.bool,
};

export default ThemesArtworkWithFrame;
