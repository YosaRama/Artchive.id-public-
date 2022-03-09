/* eslint-disable @next/next/no-img-element */

// Libs
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { Badge, Card, Col } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesArtworkCard(props) {
  const {
    imgSrc,
    artworkSlug,
    artworkTitle,
    artistName,
    artistCity,
    artworkYear,
    artworkMedia,
    artworkWidth,
    artworkHeight,
    artworkPrice,
    artworkStatus,
  } = props;
  const router = useRouter();
  return (
    <>
      <Badge.Ribbon
        text={artworkStatus == "SOLD" ? "SOLD" : "Waiting Approval"}
        className={`artwork-ribbon ${artworkStatus == "PUBLISH" && "hide"}`}
      >
        <Card
          className={s.card + " cardWithoutPadding"}
          bordered={false}
          onClick={() => router.push(`/artwork/${artworkSlug}`)}
        >
          <Col span={24} className={s.image}>
            <img
              src={imgSrc}
              alt=""
              className={artworkStatus != "PUBLISH" ? `artwork-not-publish` : ""}
            />
          </Col>
          <Col className={s.artworkDetails}>
            <h1 className={s.title}>{artworkTitle}</h1>
            <p>
              <span className={s.artist}>{artistName}</span>
              {artistCity && `, ${artistCity}`}
            </p>
            <p>
              {artworkYear}, {artworkMedia}
            </p>
            <p>{`${artworkWidth} x ${artworkHeight} cm`}</p>
            <p className={s.price}>{`IDR ${artworkPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
          </Col>
        </Card>
      </Badge.Ribbon>
    </>
  );
}

ThemesArtworkCard.propTypes = {
  imgSrc: propTypes.string.isRequired,
  artworkSlug: propTypes.string.isRequired,
  artworkTitle: propTypes.string.isRequired,
  artistName: propTypes.string.isRequired,
  artistCity: propTypes.string,
  artworkYear: propTypes.string.isRequired,
  artworkMedia: propTypes.string.isRequired,
  artworkWidth: propTypes.number.isRequired,
  artworkHeight: propTypes.number.isRequired,
  artworkPrice: propTypes.string.isRequired,
  artworkStatus: propTypes.string,
};

export default ThemesArtworkCard;
