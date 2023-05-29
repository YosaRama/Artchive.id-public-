// Libs
import { Col, Row, Image, Divider, Table } from "antd";
import ThemesButton from "themes/components/libs/button";
import { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import propTypes from "prop-types";
import moment from "moment";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

// Style
import s from "./index.module.scss";
import ThemesHeadline from "themes/components/libs/headline";

function ThemesContentsAuctionArtworkDetails(props) {
  const {
    artworkImg,
    mediaGallery,
    title,
    artistProfile,
    artistName,
    artistRole,
    artistDesc,
    imgWidth,
    imgHeight,
    media,
    information,
    description,
    imgCondition,
    conditionDesc,
    lotEnd,
    estimation,
    startingBid,
  } = props;
  //? ============== Price Incremental ============= ?//
  const estimationBid = parseInt(estimation);
  const startBid = parseInt(startingBid);
  const [price, setPrice] = useState(startBid);

  const handleDecrement = () => {
    if (price > startBid) {
      setPrice((prevPrice) => prevPrice - 1000000);
    }
  };

  const handleIncrement = () => {
    if (price < estimationBid) {
      setPrice((prevPrice) => prevPrice + 1000000);
    }
  };

  // * ====================================== * //

  //? ============== Bid History Column ============= ?//
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Bid",
      dataIndex: "bid",
      key: "bid",
      render: (text) => <a>IDR {text}</a>,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.bid - b.bid,
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
  ];

  const data = [
    {
      key: "1",
      date: "27-05-2023 16:52",
      bid: priceFormatter("10000000", ","),
      user: "Dion Pramana",
    },
    {
      key: "2",
      date: "19 May 2023",
      bid: priceFormatter("9000000", ","),
      user: "Dion Pramana",
    },
    {
      key: "3",
      date: "21 May 2023",
      bid: priceFormatter("8000000", ","),
      user: "Dion Pramana",
    },
  ];
  // * ====================================== * //
  return (
    <>
      <Row justify="space-between">
        <Col span={12}>
          {/* //? ============== Artwork Container ============= ?// */}
          <Image.PreviewGroup>
            <Col span={24} className={s.imageContainer}>
              <Image src={artworkImg} alt="" />
            </Col>

            <Row gutter={[16, 0]}>
              {mediaGallery?.map((item, index) => {
                return (
                  <>
                    <Col
                      key={index}
                      xl={{ span: 6 }}
                      className={s.detailsImageContainer + " artworkDetails-details-image"}
                    >
                      <Image src={item.url} alt="" />
                    </Col>
                  </>
                );
              })}
            </Row>
          </Image.PreviewGroup>
          {/* // * ====================================== * // */}

          {/* //? ============== Artwork Details ============= ?// */}
          <Col span={24} className={s.detailsContainer}>
            <Col style={{ marginBottom: "40px" }}>
              <h2>Details</h2>
              <Divider className={s.divider} />
              <p style={{ fontWeight: "bold" }}>{title}</p>
              <br />
              <p>{artistName}</p>
              <br />
              <p>
                {imgWidth} x {imgHeight} cm
              </p>
              <p>{media}</p>
              <p>{information}</p>
              <br />
              <p style={{ fontWeight: "bold" }}>Description</p>
              <br />
              <p>{description} </p>
            </Col>
            <Col>
              <h2>About The Artist</h2>
              <Divider className={s.divider} />
              <Row gutter={[16, 0]}>
                <Col span={6} className={s.artistProfileContainer}>
                  <Image src="/images/profile-3.jpg" alt="" preview={false} />
                </Col>
                <Col span={18}>
                  <h4>{artistName}</h4>
                  <p>{artistRole}</p>
                  <br />
                  <p>{artistDesc}</p>
                </Col>
              </Row>
            </Col>
          </Col>
          {/* // * ====================================== * // */}
        </Col>
        <Col span={11}>
          {/* //? ============== Lot Details ============= ?// */}
          <Col span={24} className={s.lotDetails}>
            <h1>{title}</h1>
            <p>
              Item Condition: <span>{imgCondition}</span>
            </p>
            <p>{conditionDesc}</p>
            <p>
              Auction ends:{" "}
              <bold style={{ fontWeight: "bold" }}>
                {moment(lotEnd).format("DD MMM YYYY, HH:mm")} WITA
              </bold>
            </p>
            <p>Estimation: IDR {priceFormatter(`${estimation}`, ",")}</p>
            {price === estimationBid && (
              <p>
                <span>Reserve price has been met</span>
              </p>
            )}
            <Row className={s.priceBidder} justify="space-between">
              <Col className={s.buttonContainer}>
                <ThemesButton
                  type={`${price === startBid ? "disable" : "secondary"} + ${s.btn}`}
                  onClick={handleDecrement}
                  disabled={price === startBid}
                >
                  <MinusOutlined />
                </ThemesButton>
              </Col>
              <Col style={{ margin: "0 10px" }}>
                <p style={{ fontWeight: "bold" }}>Price: IDR {priceFormatter(`${price}`, ",")}</p>
              </Col>
              <Col className={s.buttonContainer}>
                <ThemesButton
                  type={`${price === estimationBid ? "disable" : "secondary"}  + ${s.btn}`}
                  onClick={handleIncrement}
                  disabled={price === estimationBid}
                >
                  <PlusOutlined />
                </ThemesButton>
              </Col>
            </Row>
            <ThemesButton type={`primary + ${s.btn}`}>PLACE BID</ThemesButton>
          </Col>
          {/* // * ====================================== * // */}

          {/* //? ============== Bid History ============= ?// */}
          <Col span={24} className={s.bidContainer}>
            <Col style={{ marginBottom: "40px" }}>
              <h2>Bid History</h2>
              <Divider className={s.divider} />
              <Table columns={columns} dataSource={data} />
            </Col>
          </Col>
          {/* // * ====================================== * // */}
        </Col>
      </Row>

      {/* //? ============== Auction Highlight ============= ?// */}
      {/* //TODO : Not yet get auction artwork data// */}
      <Col className={s.highlightContainer}>
        <ThemesHeadline title="Auction Highlight" className={s.headline} />

        <Row gutter={16} justify="space-between">
          <Col span={6} className={s.artworkContainer}>
            <Col className={s.artwork}>
              <Col className={s.imageContainer}>
                <Image src="/images/artwork-1.jpg" alt="" preview={false} />
              </Col>
              <h3>Mona Lisa</h3>
              <p>Artist</p>
              <p style={{ fontWeight: "bold" }}>Estimation</p>
              <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
            </Col>
          </Col>
          <Col span={6} className={s.artworkContainer}>
            <Col className={s.artwork}>
              <Col className={s.imageContainer}>
                <Image src="/images/artwork-1.jpg" alt="" preview={false} />
              </Col>
              <h3>Mona Lisa</h3>
              <p>Artist</p>
              <p style={{ fontWeight: "bold" }}>Estimation</p>
              <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
            </Col>
          </Col>
          <Col span={6} className={s.artworkContainer}>
            <Col className={s.artwork}>
              <Col className={s.imageContainer}>
                <Image src="/images/artwork-1.jpg" alt="" preview={false} />
              </Col>
              <h3>Mona Lisa</h3>
              <p>Artist</p>
              <p style={{ fontWeight: "bold" }}>Estimation</p>
              <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
            </Col>
          </Col>
          <Col span={6} className={s.artworkContainer}>
            <Col className={s.artwork}>
              <Col className={s.imageContainer}>
                <Image src="/images/artwork-1.jpg" alt="" preview={false} />
              </Col>
              <h3>Mona Lisa</h3>
              <p>Artist</p>
              <p style={{ fontWeight: "bold" }}>Estimation</p>
              <p style={{ marginBottom: "0px" }}>IDR 2.000.000 - IDR 5.000.000</p>
            </Col>
          </Col>
        </Row>
      </Col>
      {/* // * ====================================== * // */}
    </>
  );
}

ThemesContentsAuctionArtworkDetails.propTypes = {
  artworkImg: propTypes.string,
  mediaGallery: propTypes.string,
  title: propTypes.string,
  artistProfile: propTypes.string,
  artistName: propTypes.string,
  artistRole: propTypes.string,
  artistDesc: propTypes.string,
  imgWidth: propTypes.string,
  imgHeight: propTypes.string,
  media: propTypes.string,
  information: propTypes.string,
  description: propTypes.string,
  imgCondition: propTypes.string,
  conditionDesc: propTypes.string,
  lotEnd: propTypes.string,
  estimation: propTypes.string,
  startingBid: propTypes.string,
};

export default ThemesContentsAuctionArtworkDetails;
