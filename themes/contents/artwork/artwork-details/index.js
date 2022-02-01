/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import { Card, Col, Image, Row } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container";
import PageArtworkFrame from "themes/components/libs/page-artwork-frame";
import PageButton from "themes/components/libs/page-button";
import PageDividerButton from "themes/components/libs/page-divider-button";
import PageTitle from "themes/components/libs/page-title";

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
    queryString: `slug=${artworkData.slug}&artistId=${artworkData.artist_id}`,
  });
  // * ====================================== * //

  //? ============== Might Like Artwork Hook ============= ?//
  const genreListData = artworkData.genre.map((item) => item.id);
  const genreList = genreListData.join(",");
  const { data: mightLikeData } = useArtworks({
    queryString: `slug=${artworkData.slug}&genreId=${genreList}`,
  });
  // * ====================================== * //
  return (
    <>
      <section style={{ margin: "50px 0" }}>
        <PageContainerBox>
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
                  <PageButton type={"default " + s.cartBtn}>
                    <CartIcon />
                    ADD TO CART
                  </PageButton>
                </Col>
              </Card>
            </Col>
          </Row>

          {otherArtworkData?.length != 0 && (
            <section style={{ margin: "100px 0" }}>
              <PageTitle
                title={`Other artwork`}
                subtitle={`${artworkData?.artist?.full_name}`}
                className={s.sectionTitle}
              />
              <Row gutter={[16, 0]} className={s.otherSection}>
                {otherArtworkData?.map((item) => {
                  return (
                    <Col span={6} key={item.id}>
                      <PageArtworkFrame
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
              <PageDividerButton>SEE MORE</PageDividerButton>
            </section>
          )}

          {mightLikeData?.length != 0 && (
            <section style={{ margin: "100px 0" }}>
              <PageTitle title="You Might Also Like" className={s.sectionTitle} />
              <Row gutter={[16, 0]} className={s.otherSection}>
                {mightLikeData?.map((item) => {
                  return (
                    <Col span={6} key={item.id}>
                      <PageArtworkFrame
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
              <PageDividerButton>SEE MORE</PageDividerButton>
            </section>
          )}
        </PageContainerBox>
      </section>
    </>
  );
}

ArtworkDetailsPage.propTypes = {
  artworkData: propTypes.object,
};

export default ArtworkDetailsPage;
