// Libs
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { Badge, Col, Divider, Image } from "antd";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

// Styles
import s from "./index.module.scss";

// Components
import ThemesVerifiedIcon from "../verified-icon";

function ThemesArtworkWithFrame(props) {
  const router = useRouter();
  const {
    imgSrc,
    artworkTitle,
    artworkSize,
    artworkSlug,
    artworkStatus,
    isCuratorPick,
    forAuction = false,
    artistName,
    startEstimation,
    endEstimation,
  } = props;

  return (
    <Badge.Ribbon
      text={
        artworkStatus && artworkStatus === "SOLD"
          ? "SOLD"
          : artworkStatus === "CLOSED"
          ? "LOT CLOSED"
          : "Waiting Approval"
      }
      className={`artwork-ribbon ${
        (artworkStatus == "PUBLISH" || artworkStatus == "EXHIBITION" || artworkStatus == "OPEN") &&
        "hide"
      }`}
    >
      {!forAuction && (
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
                {isCuratorPick ? <ThemesVerifiedIcon /> : null}
              </h1>
            )}
            {artworkSize && <p className={s.size}>{artworkSize} cm</p>}
          </Col>
        </Col>
      )}

      {forAuction && (
        <Col span={24} className={s.containerAuction}>
          <Col span={24} className={s.image} onClick={() => router.push(`${artworkSlug}`)}>
            <Image
              src={imgSrc ? imgSrc : "/images/default-images.png"}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              preview={false}
              className={artworkStatus == "OPEN" ? "" : `artwork-not-publish`}
            />
          </Col>
          <Col className={s.content}>
            <h3 className={s.title}>{artworkTitle}</h3>
            <p>
              by <span>{artistName}</span>
            </p>

            <div className={s.divider} />

            <p>Estimation</p>
            <p>
              IDR {priceFormatter(startEstimation, ",")} - {priceFormatter(endEstimation, ",")}
            </p>
          </Col>
        </Col>
      )}
    </Badge.Ribbon>
  );
}

ThemesArtworkWithFrame.propTypes = {
  artworkSlug: propTypes.string.isRequired,
  imgSrc: propTypes.string,
  artworkTitle: propTypes.string,
  artworkSize: propTypes.string,
  artworkStatus: propTypes.oneOf(["PUBLISH", "SOLD", "DRAFT", "EDIT", "OPEN", "CLOSED"]),
  isCuratorPick: propTypes.bool,
  forAuction: propTypes.bool,
  artistName: propTypes.string,
  startEstimation: propTypes.string,
  endEstimation: propTypes.string,
};

export default ThemesArtworkWithFrame;
