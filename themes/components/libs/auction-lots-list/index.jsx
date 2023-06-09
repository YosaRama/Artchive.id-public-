// Libs
import propTypes from "prop-types";
import moment from "moment-timezone";
import { Col, Row, Image, Divider } from "antd";
import { useRouter } from "next/router";

// Styles
import s from "./index.module.scss";

// Icons
import ThemesButton from "../button";
import priceFormatter from "app/helpers/priceFormatter";

function ThemesAuctionLotsList(props) {
  const {
    lot,
    imgUrl,
    title,
    artistName,
    imgWidth,
    imgHeight,
    media,
    lotOpenDate,
    lotCloseDate,
    estimation,
    initialPrice,
    slug,
    grid,
    status,
    artworkUrl,
  } = props;
  const router = useRouter();
  const timeZone = moment.tz.guess();

  return (
    <>
      {grid ? (
        ///? ============== GRID VIEW ============= ?//
        <Row
          span={24}
          className={s.cartContainerGrid}
          onClick={() => router.push(`/${artworkUrl}`)}
        >
          <Col span={24}>
            <Col span={24} className={s.imgSrcContainer}>
              {status === "ENDED" ? (
                <Col className={s.tag}>
                  <p>ENDED</p>
                </Col>
              ) : (
                ""
              )}

              <Image
                preview={false}
                className={s.imgSrc}
                alt=""
                src={`${process.env.NEXT_PUBLIC_S3_URL}/${imgUrl}`}
              />
            </Col>

            <Col span={24} className={s.descContainer}>
              <Col>
                <h2 className={s.title}>{title}</h2>
                {artistName ? (
                  <p className={s.artist} style={{ fontWeight: "600" }}>
                    by {artistName}
                  </p>
                ) : (
                  ""
                )}
              </Col>
              <Col>
                <p>Estimation : IDR {priceFormatter(estimation, ",")}</p>
                <h4>
                  {status === "READY" ? "Current Bid:" : status === "SOLD" ? "Final Bid:" : ""} IDR{" "}
                  {priceFormatter(initialPrice, ",")}
                </h4>
              </Col>
              <Divider style={{ margin: "5px 0px", backgroundColor: "black" }} />
              <Col>
                <p>Open: {moment.tz(lotOpenDate, timeZone).format("DD MMMM YYYY | HH:mm")} WITA</p>
                <p>Close: {moment.tz(lotOpenDate, timeZone).format("DD MMMM YYYY | HH:mm")} WITA</p>
              </Col>
            </Col>
          </Col>
          <Col span={24}>
            <ThemesButton
              type={`primary + ${s.btn}`}
              onClick={() => router.push(`/${artworkUrl}`)}
              disabled={status === "SOLD" ? true : false}
            >
              PLACE BID
            </ThemesButton>
          </Col>
        </Row>
      ) : (
        // * ====================================== * //

        //? ============== DEFAULT VIEW ============= ?//
        <Col className={s.cartContainer} onClick={() => router.push(`/${artworkUrl}`)}>
          <Row gutter={[0, 10]} className={s.cartLotsContainer}>
            <Col span={6} className={s.imgSrcContainer}>
              {status === "ENDED" ? (
                <Col className={s.tag}>
                  <p>ENDED</p>
                </Col>
              ) : (
                ""
              )}
              <Image
                preview={false}
                className={s.imgSrc}
                alt=""
                src={`${process.env.NEXT_PUBLIC_S3_URL}/${imgUrl}`}
                onClick={() => router.push(`/${artworkUrl}`)}
              />
            </Col>

            <Col span={9} className={s.descContainer}>
              <p>LOT{lot}</p>
              <Col>
                <h2 className={s.title} onClick={() => router.push(`/${artworkUrl}`)}>
                  {title}
                </h2>
                {artistName ? (
                  <p className={s.artist} style={{ fontWeight: "600" }}>
                    {`by `}
                    {artistName}
                  </p>
                ) : (
                  ""
                )}
              </Col>

              <Col>
                <p className={s.size}>{`${imgWidth}x ${imgHeight} cm`}</p>
                <p className={s.material}>{media}</p>
              </Col>

              <Col>
                <h3>
                  Open : {moment.tz(lotOpenDate, timeZone).format("DD MMMM YYYY | HH:mm")} WITA
                </h3>
                <h3>
                  Close : {moment.tz(lotOpenDate, timeZone).format("DD MMMM YYYY | HH:mm")} WITA
                </h3>
              </Col>
            </Col>
            <Divider type="vertical" className={s.divider} />
            <Col span={6} className={s.priceContainer}>
              <Col>
                <p style={{ lineHeight: " 25px" }}>Estimation</p>
                <p style={{ lineHeight: " 25px" }}>IDR {priceFormatter(estimation, ",")}</p>
              </Col>
              <Col className={s.price}>
                <h3 style={{ fontWeight: "700", lineHeight: "30px" }}>
                  {status === "READY" ? "Current Bid:" : status === "SOLD" ? "Final Bid:" : ""}
                </h3>
                <h3 style={{ fontWeight: "700", lineHeight: "30px" }}>
                  IDR {priceFormatter(initialPrice, ",")}
                </h3>
              </Col>

              <ThemesButton
                type={`primary + ${s.btn}`}
                onClick={() => router.push(`/${artworkUrl}`)}
                disabled={status === "SOLD" ? true : false}
              >
                PLACE BID
              </ThemesButton>
            </Col>
          </Row>
        </Col>
        // * ====================================== * //
      )}
    </>
  );
}

ThemesAuctionLotsList.propTypes = {
  lot: propTypes.string,
  title: propTypes.string,
  artistName: propTypes.string,
  imgWidth: propTypes.string,
  imgHeight: propTypes.string,
  media: propTypes.string,
  lotOpenDate: propTypes.string,
  lotOpenTime: propTypes.string,
  lotCloseDate: propTypes.string,
  lotCloseTime: propTypes.string,
  estimation: propTypes.string,
  initialPrice: propTypes.string,
  slug: propTypes.string,
  imgUrl: propTypes.string,
  grid: propTypes.bool,
  status: propTypes.string,
  artworkUrl: propTypes.string,
};

export default ThemesAuctionLotsList;
