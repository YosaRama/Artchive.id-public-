/* eslint-disable @next/next/no-img-element */

// Libs
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { Badge, Card, Col } from "antd";

// Helpers
import priceFormatter from "app/helpers/priceFormatter";
import { stringCapitalize } from "app/helpers/capitalize";

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
        className={`artwork-ribbon ${
          (artworkStatus == "PUBLISH" || artworkStatus == "EXHIBITION") && "hide"
        }`}
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
              className={
                artworkStatus == "PUBLISH" || artworkStatus == "EXHIBITION"
                  ? ``
                  : "artwork-not-publish"
              }
            />
          </Col>
          <Col className={s.artworkDetails}>
            <h1 className={s.title}>{artworkTitle}</h1>
            <p>
              <span className={s.artist}>{artistName}</span>
              {artistCity && `, ${artistCity}`}
            </p>
            <p>
              {artworkYear}, {stringCapitalize(artworkMedia.replace(/_/g, " "))}
            </p>
            <p>{`${artworkWidth} x ${artworkHeight} cm`}</p>
            <p className={s.price}>{`IDR ${priceFormatter(artworkPrice, ",")}`}</p>
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
