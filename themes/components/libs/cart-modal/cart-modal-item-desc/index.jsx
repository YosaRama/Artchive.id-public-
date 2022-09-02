//Libs
import { Col, Image, Row } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";

//
import priceFormatter from "app/helpers/priceFormatter";

//Styles
import s from "./index.module.scss";

function ThemesCartModalItemDesc(props) {
  const { imgUrl, title, artist, price, artworkUrl } = props;
  const router = useRouter();
  return (
    <>
      <Col span={24} className={s.itemContainer}>
        <Row>
          <Col className={s.imgContainer}>
            <Image
              className={s.imgSrc}
              height={"80px"}
              width={"80px"}
              alt=""
              src={`${process.env.NEXT_PUBLIC_S3_URL}/${imgUrl}`}
              preview={false}
              onClick={() => router.push(`/artwork/${artworkUrl}`)}
            />
          </Col>
          <Col className={s.itemDesc}>
            {/* <Col>{artworkTitle}</Col>
            <Col>{artistName}</Col>
            <p className={s.price}>{`IDR ${priceFormatter(artworkPrice, ",")}`}</p> */}
            <h4
              className={s.title}
              value={title}
              onClick={() => router.push(`/artwork/${artworkUrl}`)}
            >
              {title}
            </h4>
            <h5 className={s.artsit} style={{ fontWeight: "700" }}>
              <span> {`by `}</span> {artist}
            </h5>
            <h5 className={s.price}>
              <span style={{ fontWeight: "700" }}>{`IDR `}</span>
              {priceFormatter(price, ",")}
            </h5>
          </Col>
        </Row>
      </Col>
    </>
  );
}

ThemesCartModalItemDesc.propTypes = {
  imgSrc: propTypes.string,
  title: propTypes.string,
  artist: propTypes.string,
  price: propTypes.string,
  artworkUrl: propTypes.string,
};

export default ThemesCartModalItemDesc;
