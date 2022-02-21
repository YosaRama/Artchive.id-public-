/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import { Card, Col, Image, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesButton from "themes/components/libs/button";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";
import ThemesHeadline from "themes/components/libs/headline";

// Data Hook
import { useArtworks } from "app/hooks/artwork";

// Icons
import { CartIcon } from "public/icons/cart-icon";

// Styles
import s from "./index.module.scss";

function ArtworkDetailsPage(props) {
  const { artworkData } = props;

  //? ============== Other Artwork Hook ============= ?//
  const { data: otherArtworkData } = useArtworks({
    queryString: `excludeSlug=${artworkData.slug}&artistId=${artworkData.artist_id}&client=true`,
  });
  // * ====================================== * //

  //? ============== Might Like Artwork Hook ============= ?//
  const genreListData = artworkData.genre.map((item) => item.id);
  const genreList = genreListData.join(",");
  const { data: mightLikeData } = useArtworks({
    queryString: `excludeSlug=${artworkData.slug}&genreId=${genreList}&client=true`,
  });
  // * ====================================== * //
  return (
    <>
      <section style={{ margin: "50px 0" }}>
        <ThemesContainerMain>
          <Row gutter={[64, 0]}>
            <Col span={12}>
              <Col span={24} style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 10 }}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkData?.media_cover?.url}`}
                  alt=""
                />
              </Col>
              <Row gutter={[16, 0]}>
                {artworkData?.media_gallery?.map((item) => {
                  return (
                    <Col
                      span={6}
                      className={s.detailsImageContainer + " artworkDetails-details-image"}
                      key={item.id}
                    >
                      <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`} alt="" />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col span={12}>
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
                    <strong>IDR</strong> {artworkData?.price}
                  </p>
                </Col>
                <Col>
                  <ThemesButton type={"default " + s.cartBtn}>
                    <CartIcon />
                    ADD TO CART
                  </ThemesButton>
                </Col>
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
                    <Col span={6} key={item.id}>
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

          {mightLikeData?.length != 0 && (
            <section style={{ margin: "100px 0" }}>
              <ThemesHeadline title="You Might Also Like" className={s.sectionTitle} />
              <Row gutter={[16, 0]} className={s.otherSection}>
                {mightLikeData?.map((item) => {
                  return (
                    <Col span={6} key={item.id}>
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

ArtworkDetailsPage.propTypes = {
  artworkData: propTypes.object,
};

export default ArtworkDetailsPage;
