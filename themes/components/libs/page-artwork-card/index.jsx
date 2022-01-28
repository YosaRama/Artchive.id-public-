/* eslint-disable @next/next/no-img-element */

// Libs
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { Card, Col } from "antd";

// Styles
import s from "./index.module.scss";

function PageArtworkCardList(props) {
  const { imgSrc } = props;
  const router = useRouter();
  return (
    <>
      <Card
        className={s.card + " artworkCardList"}
        bordered={false}
        onClick={() => router.push("artwork/id")}
      >
        <Col span={24} className={s.image}>
          <img src={imgSrc} alt="" />
        </Col>
        <Col className={s.artworkDetails}>
          <h1 className={s.title}>Now I See You</h1>
          <p>
            <span className={s.artist}>Yosa Rama</span>, Bali
          </p>
          <p>2022, Acrylic on Canvas</p>
          <p>300 x 200 cm</p>
          <p className={s.price}>IDR 6.000.000</p>
        </Col>
      </Card>
    </>
  );
}

PageArtworkCardList.propTypes = {
  imgSrc: propTypes.string,
};

export default PageArtworkCardList;
