// Libs
import { Col, Row, Image, Divider } from "antd";
import propTypes from "prop-types";
import { useRouter } from "next/router";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import stringCapitalize from "app/helpers/capitalize";

// Styles
import s from "./index.module.scss";

function ThemesProfileTransactionItem(props) {
  const { imgUrl, title, artist, artworkUrl, material, imgWidth, imgHeight, total } = props;

  const router = useRouter();
  return (
    <>
      <Row gutter={[0, 10]} className={s.transactionItemContainer}>
        <Col className={s.imgSrcContainer}>
          <Image
            preview={false}
            className={s.imgSrc}
            alt=""
            src={`${process.env.NEXT_PUBLIC_S3_URL}/${imgUrl}`}
            onClick={() => router.push(`/artwork/${artworkUrl}`)}
          />
        </Col>

        <Col className={s.descContainer}>
          <h2 className={s.title} onClick={() => router.push(`/artwork/${artworkUrl}`)}>
            {title}
          </h2>
          <p className={s.artist} style={{ fontWeight: "600" }}>
            {`by `}
            {artist}
          </p>
          <p className={s.material}>{stringCapitalize(material.replace(/_/g, " "))}</p>
          <p className={s.size}>{`${imgWidth} x ${imgHeight} cm`}</p>
        </Col>

        <Col className={s.priceContainer}>
          <Col style={{ marginRight: 5 }}>IDR </Col>
          <Col>{priceFormatter(`${total}`, ",")}</Col>
        </Col>
      </Row>
      <Divider className={s.divider} />
    </>
  );
}

ThemesProfileTransactionItem.propTypes = {
  imgUrl: propTypes.string,
  artworkUrl: propTypes.string,
  title: propTypes.string,
  artist: propTypes.string,
  material: propTypes.string,
  imgWidth: propTypes.string,
  imgHeight: propTypes.string,
  total: propTypes.string,
};

export default ThemesProfileTransactionItem;
