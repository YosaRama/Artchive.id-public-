// Libs
import { Col, Row, Image, Divider, Spin, Badge } from "antd";
import moment from "moment-timezone";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import propTypes from "prop-types";

// Components
import ThemesHeadline from "themes/components/libs/headline";
import ThemesContentsAuctionBidDetails from "../bid";
import ThemesTextReadMore from "themes/components/libs/text-read-more";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";

// Hooks
import { useAuctionItem, useAuctionItems } from "dashboard/hooks/auction/item";

// Helper
import priceFormatter from "dashboard/helpers/priceFormatter";
import { useWindowSize } from "dashboard/helpers/useWindowSize";
import stringCapitalize from "dashboard/helpers/capitalize";

// Style
import s from "./index.module.scss";
import ThemesBlurOverlay from "themes/components/libs/blur-overlay";

function ThemesContentsAuctionArtworkDetails(props) {
  const { itemsDetails } = props;
  const router = useRouter();
  const { width } = useWindowSize();
  const { data: session } = useSession();

  // #region Data Parse
  const { id: auctionId, lotId } = router.query;
  const { data: lotDetails } = useAuctionItem({ singleId: lotId, auctionId: auctionId });
  const artworkDetails = lotDetails?.artwork_details;
  const auctionDetails = lotDetails?.auction_details;

  // #region Auction Item Details
  const { data: hgItems, loading: hgItemsLoading } = useAuctionItems({
    queryString: `&sortBy=lot&sortDirection=ASC`,
    auctionId: router.query.id,
  });
  // #endregion

  //#region Handle Highlight
  const handleHighlight = (selectedLotId) => {
    router.push(`/auction/${auctionId}/lots/${selectedLotId}`);
  };
  //#endregion

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
                {itemsDetails ? (
                  <>
                    {auctionDetails?.status === "CLOSED" && (
                      <Badge.Ribbon text="LOT CLOSED!" color="fulvous" className={s.badge} />
                    )}
                    <Image
                      src={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkDetails?.media_cover?.url}`}
                      alt=""
                      className={auctionDetails?.status === "CLOSED" && s.image}
                    />
                  </>
                ) : (
                  <>
                    <Col>
                      <Spin className={s.spin} size="large" />
                      <Image src="/images/default-images.png" alt="" preview={false} />
                    </Col>
                  </>
                )}
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
                <h3>{artworkDetails?.title}</h3>

                <Col>
                  <p>
                    by{" "}
                    <span style={{ fontWeight: "bold" }}>{artworkDetails?.artist?.full_name}</span>{" "}
                    ({artworkDetails?.year})
                  </p>
                  <Col className={s.borderContainer}>
                    <Row gutter={[16, 16]}>
                      {artworkDetails?.genre?.map((item, index) => {
                        return (
                          <Col key={index} className={s.genreBorder}>
                            <p>{item.title}</p>
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
                  <p>
                    Item Condition: <span>Good</span>
                  </p>

                  <br />
                  <p className={s.subTitle}>Artwork Description</p>
                  <p dangerouslySetInnerHTML={{ __html: artworkDetails?.description }} />

                  <br />
                  <p className={s.subTitle}>Auction Description</p>
                  <p>
                    The lot item is auctioned from {width <= 500 && <br />}
                    <span style={{ fontWeight: "bold" }}>
                      {/* {moment(auctionDetails?.started_at).format("dddd, DD MMM YYYY")}{" "} */}
                      Thursday, 16 November 2023
                    </span>{" "}
                    to{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {/* {moment(auctionDetails?.stopped_at).format("dddd, DD MMM YYYY")}{" "} */}
                      Tuesday, 28 November, 2023
                    </span>
                  </p>

                  <p>
                    Bid estimation : {width <= 500 && <br />}
                    {priceFormatter(
                      `IDR ${auctionDetails?.start_estimation} - IDR ${auctionDetails?.end_estimation} `,
                      ","
                    )}
                  </p>
                  {!session && <ThemesBlurOverlay />}
                </Col>
              </Col>
              {
                // #region About Artist Section
                <Col>
                  <h2>About The Artist</h2>
                  <Divider className={s.divider} />
                  <Col>
                    <Row gutter={[16, 0]} className={s.artistProfileContainer}>
                      <Col span={width > 768 ? 6 : 24} className={s.image}>
                        <Row>
                          <Col xl={{ span: 8 }} lg={{ span: 8 }} sm={{ span: 4 }} xs={{ span: 8 }}>
                            <Image
                              src={artistProfile}
                              alt="artist-profile"
                              preview={false}
                              onClick={handleToArtistProfile}
                              className={`${s.pointer} `}
                            />
                          </Col>
                          {width <= 768 && (
                            <>
                              <Col style={{ margin: "auto 0px auto 10px" }}>
                                <h4 onClick={handleToArtistProfile} className={`${s.pointer} `}>
                                  {artworkDetails?.artist?.full_name}
                                </h4>
                                <p>Artist</p>
                              </Col>
                            </>
                          )}
                        </Row>
                        <br />
                      </Col>
                      <Col span={width > 768 ? 18 : 24}>
                        {width > 768 && (
                          <>
                            <h3 onClick={handleToArtistProfile} className={`${s.pointer}`}>
                              {artworkDetails?.artist.full_name}
                            </h3>
                            <h4>Artist</h4>
                          </>
                        )}

                        {artistDescription}
                      </Col>
                      {!session && <ThemesBlurOverlay />}
                    </Row>
                  </Col>
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
            />
          </Col>
        }
      </Row>

      {hgItems?.length != 0 && (
        <section className={s.highlightContainer}>
          <ThemesHeadline title="Auction Highlight" className={s.headline} />
          <Row gutter={[16, 0]} className={s.otherSection}>
            {hgItems?.slice(0, 4)?.map((item) => {
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
                    artworkStatus={item?.auction_details?.item_status}
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

ThemesContentsAuctionArtworkDetails.propTypes = {
  itemsDetails: propTypes.string,
};

export default ThemesContentsAuctionArtworkDetails;
