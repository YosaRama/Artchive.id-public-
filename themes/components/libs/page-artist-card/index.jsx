// Libs
import propTypes from "prop-types";
import { Col } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

// Styles
import s from "./index.module.scss";

function PageArtistCard(props) {
  const { artistName, artistCity, avatarSrc, bannerSrc, artistId } = props;
  const router = useRouter();
  return (
    <Col className={s.card} onClick={() => router.push(`/artist/${artistId}`)}>
      <Col className={s.image}>
        <Image
          src={bannerSrc ? bannerSrc : "/images/default-images.jpg"}
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
  artistId: propTypes.number.isRequired,
  artistName: propTypes.string,
  artistCity: propTypes.string,
  avatarSrc: propTypes.string,
  bannerSrc: propTypes.string,
};

export default PageArtistCard;
