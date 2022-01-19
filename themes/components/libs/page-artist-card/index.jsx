// Libs
import { Col } from "antd";
import Image from "next/image";

// Styles
import s from "./index.module.scss";

function PageArtistCard() {
  return (
    <Col className={s.card}>
      <Col className={s.image}>
        <Image src="/images/artwork-1.jpg" layout="fill" alt="" objectFit="cover" />
      </Col>
      <Col className={s.avatar}>
        <Image src="/images/profile-1.jpg" layout="fill" alt="" objectFit="cover" />
      </Col>
      <Col className={s.content}>
        <h1 className={s.artistName}>John Doe</h1>
        <p className={s.artistCity}>Bali</p>
      </Col>
    </Col>
  );
}

export default PageArtistCard;
