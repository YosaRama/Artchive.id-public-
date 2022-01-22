// Libs
import propTypes from "prop-types";
import { Col } from "antd";
import Image from "next/image";

// Styles
import s from "./index.module.scss";

function PageArtistCard(props) {
  const { artistName, artistCity, avatarSrc, bannerSrc } = props;
  return (
    <Col className={s.card}>
      <Col className={s.image}>
        <Image
          src={bannerSrc ? bannerSrc : "/images/default-images.png"}
          layout="fill"
          alt=""
          objectFit="cover"
        />
      </Col>
      <Col className={s.avatar}>
        <Image
          src={avatarSrc ? avatarSrc : "/images/profile-default.png"}
          layout="fill"
          alt=""
          objectFit="cover"
        />
      </Col>
      <Col className={s.content}>
        {artistName && <h1 className={s.artistName}>{artistName}</h1>}
        {artistCity && <p className={s.artistCity}>{artistCity}</p>}
      </Col>
    </Col>
  );
}

PageArtistCard.propTypes = {
  artistName: propTypes.string,
  artistCity: propTypes.string,
  avatarSrc: propTypes.string,
  bannerSrc: propTypes.string,
};

export default PageArtistCard;
