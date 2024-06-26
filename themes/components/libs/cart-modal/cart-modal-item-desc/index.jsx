//Libs
import { Col, Image, Row, Badge } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { useSession } from "next-auth/react";

// Hooks
import { useCarts } from "dashboard/hooks/cart";

// Helpers
import priceFormatter from "dashboard/helpers/priceFormatter";

//Styles
import s from "./index.module.scss";

function ThemesCartModalItemDesc(props) {
  const { imgUrl, title, artist, price, artworkUrl } = props;
  const router = useRouter();

  //? ============== Handle User ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user.id;
  // * ====================================== * //

  //? ============== Cart Hooks ============= ?//
  const { data: cartItem } = useCarts({ queryString: `id=${userId}` }); //TODO : Change ID with current user ID//
  // * ====================================== * //

  //? ============== Handle Cart Sold Badge ============= ?//
  const statusSoldBadge = cartItem && cartItem.every((item) => item.artwork.status == "SOLD");
  // * ====================================== * //
  return (
    <>
      <Col span={24} className={s.itemContainer}>
        <Row>
          {statusSoldBadge == false && (
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
          )}
          {statusSoldBadge == true && (
            <Badge.Ribbon text="SOLD" color="#e5890a" size="small">
              <Col className={s.imgContainer}>
                <Image
                  className={s.imgSrcSold}
                  height={"80px"}
                  width={"80px"}
                  alt=""
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/${imgUrl}`}
                  preview={false}
                  onClick={() => router.push(`/artwork/${artworkUrl}`)}
                />
              </Col>
            </Badge.Ribbon>
          )}

          <Col className={s.itemDesc}>
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
