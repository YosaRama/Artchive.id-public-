// Libs
import { Col, Row, Image, Divider, Carousel } from "antd";
import { useState, useEffect } from "react";
import moment from "moment-timezone";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// Components
import ThemesHeadline from "themes/components/libs/headline";
import ThemesContentsAuctionBidDetails from "../bid";
import ThemesTextReadMore from "themes/components/libs/text-read-more";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";

// Hooks
import { useAuctionItem, useAuctionItems } from "app/hooks/auction/item";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import { useWindowSize } from "app/helpers/useWindowSize";
import stringCapitalize from "app/helpers/capitalize";

// Style
import s from "./index.module.scss";
import { useAuction } from "app/hooks/auction";

function ThemesContentsAuctionArtworkDetails() {
  const router = useRouter();
  const { width } = useWindowSize();
  // #region timeline
  const timeZone = moment.tz.guess();
  const zone = moment().format("ZZ");
  const IndonesiaTimeZone =
    zone === "+0700" ? "WIB" : zone === "+0800" ? "WITA" : zone === "+0900" ? "WIT" : "";

  // #endregion

  // #region Data Parse
  const { id: auctionId, lotId } = router.query;

  const { data: auctionData } = useAuction({ singleId: auctionId });

  const { data: lotDetails } = useAuctionItem({ singleId: lotId, auctionId: auctionId });
  const artworkDetails = lotDetails?.artwork_details;
  const auctionDetails = lotDetails?.auction_details;

  const { data: lotHighlightData } = useAuctionItems({ auctionId: auctionId, queryString: "" });

  const handleHighlight = (selectedLotId) => {
    router.push(`/auction/${auctionId}/lots/${selectedLotId}`);
  };

  //#region Handle artist data
  // profile picture
  const artistProfile = artworkDetails?.artist?.profile
    ? `${process.env.NEXT_PUBLIC_S3_URL}/${artworkDetails?.artist?.profile?.url}`
    : "/images/default-images.png";

  // description
  const artistDescription =
    artworkDetails?.artist?.biography === null ? (
      `No biography from ${artworkDetails?.artist?.full_name}.`
    ) : (
      <ThemesTextReadMore textLength={200}>{artworkDetails?.artist?.biography}</ThemesTextReadMore>
    );

  // handle go to profile page
  const handleToArtistProfile = () => {
    router.push(`/artist/${artworkDetails?.artist?.slug}`);
  };
  //#endregion

  return (
    <>
      <Row justify="space-between">
        <Col span={width > 768 ? 12 : 24}>
          {
            // #region Artwork Container
            <Image.PreviewGroup>
              <Col span={24} className={s.imageContainer}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkDetails?.media_cover?.url}`}
                  alt=""
                />
              </Col>

              <Row gutter={[16, 0]}>
                {artworkDetails?.media_gallery?.map((item, index) => {
                  return (
                    <>
                      <Col
                        key={index}
                        xl={{ span: 6 }}
                        lg={{ span: 6 }}
                        md={{ span: 6 }}
                        xs={{ span: 6 }}
                        className={s.detailsImageContainer + " artworkDetails-details-image"}
                      >
                        <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Image.PreviewGroup>
            // #endregion
          }
          {
            // #region Artwork Details
            <Col span={24} className={s.detailsContainer}>
              <Col style={{ marginBottom: "40px" }}>
                <h2>Details</h2>
                <Divider className={s.divider} />
                <h3 style={{ fontWeight: "bold", marginBottom: "5px" }}>{artworkDetails?.title}</h3>
                <p>
                  by <span style={{ fontWeight: "bold" }}>{artworkDetails?.artist?.full_name}</span>
                </p>
                <Col className={s.borderContainer}>
                  <Row gutter={[16, 16]}>
                    {artworkDetails?.genre?.map((item, index) => {
                      return (
                        <Col key={index} className={s.genreBorder}>
                          <p style={{ fontSize: "14px", padding: "5px 5px" }}>{item.title}</p>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
                <br />
                <p>
                  {artworkDetails?.width} x {artworkDetails?.height} cm
                </p>
                <p>{stringCapitalize(`${artworkDetails?.material}`.replace(/_/g, " "))}</p>

                <br />
                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Artwork Description</p>

                <p dangerouslySetInnerHTML={{ __html: artworkDetails?.description }} />

                <p>
                  Item Condition: <span>Good</span>
                </p>
                <br />
                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Auction Description</p>

                <p>
                  Auction ends on {width <= 500 && <br />}
                  <span style={{ fontWeight: "bold" }}>
                    {moment(auctionDetails?.stopped_at).format("dddd, DD MMM YYYY")}{" "}
                  </span>
                </p>
                <p>
                  Bid estimation : {width <= 500 && <br />}
                  {priceFormatter(
                    `IDR ${auctionDetails?.start_estimation} - IDR ${auctionDetails?.end_estimation} `,
                    ","
                  )}
                </p>
              </Col>
              {
                // #region About Artist Section
                <Col>
                  <h2>About The Artist</h2>
                  <Divider className={s.divider} />
                  <Row gutter={[16, 0]} className={s.artistProfileContainer}>
                    <Col span={width > 768 ? 6 : 24} className={s.image}>
                      <Row>
                        <Col xl={{ span: 8 }} lg={{ span: 8 }} sm={{ span: 4 }} xs={{ span: 8 }}>
                          <Image
                            src={artistProfile}
                            alt="artist-profile"
                            preview={false}
                            onClick={handleToArtistProfile}
                            className={`${s.pointer}`}
                          />
                        </Col>
                        {width <= 768 && (
                          <Col style={{ margin: "auto 0px auto 10px" }}>
                            <h4
                              style={{ fontWeight: "bold" }}
                              onClick={handleToArtistProfile}
                              className={`${s.pointer}`}
                            >
                              {artworkDetails?.artist?.full_name}
                            </h4>
                            <p>Artist</p>
                          </Col>
                        )}
                      </Row>
                    </Col>
                    <Col span={width > 768 ? 18 : 24}>
                      {width > 768 && (
                        <>
                          <h4 onClick={handleToArtistProfile} className={`${s.pointer}`}>
                            {artworkDetails?.artist.full_name}
                          </h4>
                          <p>Artist</p>
                        </>
                      )}
                      <br />

                      <p className={s.description}>{artistDescription}</p>
                    </Col>
                  </Row>
                </Col>
                // #endregion
              }
            </Col>
            // #endregion
          }
        </Col>
        {
          <Col span={11}>
            <ThemesContentsAuctionBidDetails
              estimation={auctionDetails?.end_estimation}
              startingBid={auctionDetails?.initial_price}
              step={auctionDetails?.step}
              sticky={false}
              // status={status}
              // bidHistory={logs}
            />
          </Col>
        }
      </Row>

      {lotHighlightData?.length != 0 && (
        <section className={s.highlightContainer}>
          <ThemesHeadline
            title="Auction Highlight"
            subtitle={auctionData?.name}
            className={s.headline}
          />
          <Row gutter={[16, 0]} className={s.otherSection}>
            {lotHighlightData &&
              lotHighlightData
                ?.filter((items, index) => items?.artwork_details?.id !== artworkDetails?.id)
                ?.sort(() => Math.random() - 0.5)
                ?.slice(0, 4)
                ?.map((item) => {
                  return (
                    <Col
                      xl={{ span: 6 }}
                      lg={{ span: 9 }}
                      md={{ span: 11 }}
                      xs={{ span: 19 }}
                      key={item.id}
                      onClick={() => {
                        handleHighlight(item?.auction_details?.id);
                      }}
                    >
                      <ThemesArtworkWithFrame
                        imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item?.artwork_details?.media_cover?.url}`}
                        artworkStatus={item?.artwork_details?.status}
                        forAuction={true}
                        artworkTitle={item?.artwork_details?.title}
                        artistName={item?.artwork_details?.artist?.full_name}
                        startEstimation={item?.auction_details?.start_estimation}
                        endEstimation={item?.auction_details?.end_estimation}
                      />
                    </Col>
                  );
                })}
          </Row>
        </section>
      )}
    </>
  );
}

export default ThemesContentsAuctionArtworkDetails;
