/* eslint-disable @next/next/no-img-element */

// Libs
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { Badge, Card, Col, Divider, Tag } from "antd";

// Helpers
import priceFormatter from "dashboard/helpers/priceFormatter";
import { stringCapitalize } from "dashboard/helpers/capitalize";

// Components
import ThemesVerifiedIcon from "../verified-icon";

// Styles
import s from "./index.module.scss";

function ThemesArtworkCard(props) {
  const {
    imgSrc,
    artworkUrl,
    artworkTitle,
    artistName,
    artistCity,
    artworkYear,
    artworkMedia,
    artworkWidth,
    artworkHeight,
    artworkPrice,
    artworkStatus,
    isCuratorPick,
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
          onClick={() => router.push(`${artworkUrl}`)}
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
            <h1 className={s.title}>
              {artworkTitle} {isCuratorPick ? <ThemesVerifiedIcon /> : null}
            </h1>

            <Col style={{ width: "80%", margin: "0px auto" }}>
              <Divider className={s.divider} />
            </Col>

            <p>
              <span className={s.artist}>{artistName}</span>
              {artistCity && `, ${artistCity}`}
            </p>
            <p>
              {artworkYear}, {stringCapitalize(artworkMedia.replace(/_/g, " "))}
            </p>
            <p>{`${artworkWidth} x ${artworkHeight} cm`}</p>
            <p className={s.price}>
              {artworkPrice !== "0" ? (
                `IDR ${priceFormatter(artworkPrice, ",")}`
              ) : (
                <Tag>Request For Price</Tag>
              )}
            </p>
          </Col>
        </Card>
      </Badge.Ribbon>
    </>
  );
}

ThemesArtworkCard.propTypes = {
  imgSrc: propTypes.string.isRequired,
  artworkUrl: propTypes.string.isRequired,
  artworkTitle: propTypes.string.isRequired,
  artistName: propTypes.string.isRequired,
  artistCity: propTypes.string,
  artworkYear: propTypes.string.isRequired,
  artworkMedia: propTypes.string.isRequired,
  artworkWidth: propTypes.number.isRequired,
  artworkHeight: propTypes.number.isRequired,
  artworkPrice: propTypes.string.isRequired,
  artworkStatus: propTypes.string,
  isCuratorPick: propTypes.bool,
};

export default ThemesArtworkCard;
