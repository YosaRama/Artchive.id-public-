/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Card, Col, Image, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesButton from "themes/components/libs/button";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";
import ThemesHeadline from "themes/components/libs/headline";

// Data Hook
import { useArtworks } from "app/hooks/artwork";

// Helpers
import priceFormatter from "app/helpers/priceFormatter";

// Icons
// import { CartIcon } from "public/icons/cart-icon";
import { WhatsappIcon } from "public/icons/whatsapp-icon";

// Styles
import s from "./index.module.scss";
import ThemesShareSocial from "themes/components/libs/share-social";

function ThemesContentsArtworkDetails(props) {
  const { artworkData } = props;
  const router = useRouter();

  //? ============== Other Artwork Hook ============= ?//
  const { data: otherArtworkData } = useArtworks({
    queryString: `excludeSlug=${artworkData.slug}&artistId=${artworkData.artist_id}&client=true&limit=4`,
  });
  // * ====================================== * //

  //? ============== Might Like Artwork Hook ============= ?//
  const genreListData = artworkData.genre.map((item) => item.id);
  const genreList = genreListData.join(",");
  const { data: mightLikeData } = useArtworks({
    queryString: `excludeSlug=${artworkData.slug}&genreId=${genreList}&client=true&limit=4`,
  });
  // * ====================================== * //
  return (
    <>
      <section style={{ margin: "50px 0" }}>
        <ThemesContainerMain>
          <Row gutter={[64, 0]}>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Col span={24} style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 10 }}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkData?.media_cover?.url}`}
                  alt=""
                />
              </Col>
              <Row gutter={[16, 0]} className={s.detailsImageSection}>
                {artworkData?.media_gallery?.map((item) => {
                  return (
                    <Col
                      xl={{ span: 6 }}
                      lg={{ span: 7 }}
                      md={{ span: 6 }}
                      xs={{ span: 11 }}
                      className={s.detailsImageContainer + " artworkDetails-details-image"}
                      key={item.id}
                    >
                      <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col lg={{ span: 12 }} xs={{ span: 24 }}>
              <Card className={s.detailsCard}>
                <Col className={s.artworkDetailsTitle}>
                  <h1>{artworkData?.title}</h1>
                </Col>
                <Col className={s.artworkDetailsText}>
                  <p>
                    <strong>{artworkData?.artist?.full_name}, </strong>
                    {artworkData?.artist?.city}
                  </p>
                  <p>
                    <span>{artworkData?.year}, </span>
                    {artworkData?.material}
                  </p>
                  <p>
                    <span>{artworkData?.width}</span> x <span>{artworkData?.height} cm</span>
                  </p>
                </Col>
                <Col className={s.artworkDetailsDescription}>
                  <p>{artworkData?.description}</p>
                </Col>
                <Col className={s.artworkDetailsPrice}>
                  <p>
                    <strong>IDR</strong> {priceFormatter(artworkData?.markup_price, ",")}
                  </p>
                </Col>
                {/* <Col className={s.cardBtnContainer}>
                  <ThemesButton type={"default " + s.cartBtn}>
                    <CartIcon />
                    ADD TO CART
                  </ThemesButton>
                </Col> */}
                <Col className={s.cardBtnContainer}>
                  <a
                    href={`https://wa.me/${
                      process.env.NEXT_PUBLIC_PHONE_NUMBER
                    }?text=${encodeURIComponent(
                      "Hi There, really interest with this artwork " +
                        process.env.NEXT_PUBLIC_SITE_URL +
                        "artwork/" +
                        artworkData.slug +
                        ", Please give me more information for this artwork"
                    )}`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <ThemesButton type={"default " + s.cardButton}>
                      <WhatsappIcon /> REQUEST THIS ARTWORK
                    </ThemesButton>
                  </a>
                </Col>
                <ThemesShareSocial
                  mail={true}
                  facebook={true}
                  whatsapp={true}
                  subject={`Artchive.id Special Artwork`}
                  message={`This artwork from ${artworkData?.artist?.full_name} is very interesting`}
                  url={`${process.env.NEXT_PUBLIC_SITE_URL}/artwork/${router.query.slug}`}
                />
              </Card>
            </Col>
          </Row>

          {otherArtworkData?.length != 0 && (
            <section style={{ margin: "100px 0" }}>
              <ThemesHeadline
                title={`Other artwork`}
                subtitle={`${artworkData?.artist?.full_name}`}
                className={s.sectionTitle}
              />
              <Row gutter={[16, 0]} className={s.otherSection}>
                {otherArtworkData?.map((item) => {
                  return (
                    <Col
                      xl={{ span: 6 }}
                      lg={{ span: 7 }}
                      md={{ span: 11 }}
                      xs={{ span: 19 }}
                      key={item.id}
                    >
                      <ThemesArtworkWithFrame
                        imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`}
                        artworkStatus={item.status}
                        artworkTitle={item.title}
                        artworkSize={`${item.width} x ${item.height}`}
                        artworkSlug={item.slug}
                      />
                    </Col>
                  );
                })}
              </Row>
              <ThemesDividerWithButton
                onClick={() =>
                  router.push(
                    `/artwork?artistName=${encodeURIComponent(artworkData?.artist?.full_name)}`
                  )
                }
              >
                SEE MORE
              </ThemesDividerWithButton>
            </section>
          )}

          {mightLikeData?.length != 0 && (
            <section style={{ margin: "100px 0" }}>
              <ThemesHeadline title="You Might Also Like" className={s.sectionTitle} />
              <Row gutter={[16, 0]} className={s.otherSection}>
                {mightLikeData?.map((item) => {
                  return (
                    <Col
                      xl={{ span: 6 }}
                      lg={{ span: 7 }}
                      md={{ span: 11 }}
                      xs={{ span: 19 }}
                      key={item.id}
                    >
                      <ThemesArtworkWithFrame
                        imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`}
                        artworkStatus={item.status}
                        artworkTitle={item.title}
                        artworkSize={`${item.width} x ${item.height}`}
                        artworkSlug={item.slug}
                      />
                    </Col>
                  );
                })}
              </Row>
              <ThemesDividerWithButton>SEE MORE</ThemesDividerWithButton>
            </section>
          )}
        </ThemesContainerMain>
      </section>
    </>
  );
}

ThemesContentsArtworkDetails.propTypes = {
  artworkData: propTypes.object,
};

export default ThemesContentsArtworkDetails;
