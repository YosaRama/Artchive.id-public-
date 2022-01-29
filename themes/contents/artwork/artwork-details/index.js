/* eslint-disable @next/next/no-img-element */

// Libs
import { Card, Col, Image, Row } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container";
import PageArtworkFrame from "themes/components/libs/page-artwork-frame";
import PageButton from "themes/components/libs/page-button";
import PageDividerButton from "themes/components/libs/page-divider-button";
import PageTitle from "themes/components/libs/page-title";

// Icons
import { CartIcon } from "public/icons/cart-icon";

// Styles
import s from "./index.module.scss";

function ArtworkDetailsPage() {
  return (
    <>
      <section style={{ margin: "50px 0" }}>
        <PageContainerBox>
          <Row gutter={[64, 0]}>
            <Col span={12}>
              <Col span={24} style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 10 }}>
                <Image src="/images/artwork-7.jpg" alt="" />
              </Col>
              <Row gutter={[16, 0]}>
                <Col span={6} className={s.detailsImageContainer + " artworkDetails-details-image"}>
                  <Image src="/images/artwork-1.jpg" alt="" />
                </Col>
                <Col span={6} className={s.detailsImageContainer + " artworkDetails-details-image"}>
                  <Image src="/images/artwork-2.jpg" alt="" />
                </Col>
                <Col span={6} className={s.detailsImageContainer + " artworkDetails-details-image"}>
                  <Image src="/images/artwork-3.jpg" alt="" />
                </Col>
                <Col span={6} className={s.detailsImageContainer + " artworkDetails-details-image"}>
                  <Image src="/images/artwork-4.jpg" alt="" />
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Card className={s.detailsCard}>
                <Col className={s.artworkDetailsTitle}>
                  <h1>Artwork Title</h1>
                </Col>
                <Col className={s.artworkDetailsText}>
                  <p>
                    <strong>Artist Name, </strong>City
                  </p>
                  <p>
                    <span>Year, </span>Media
                  </p>
                  <p>
                    <span>Width</span> x <span>Height cm</span>
                  </p>
                </Col>
                <Col className={s.artworkDetailsDescription}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Col>
                <Col className={s.artworkDetailsPrice}>
                  <p>
                    <strong>IDR</strong> 15.000.0000
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

          <section style={{ margin: "100px 0" }}>
            <PageTitle title="Other artwork from [Artist Name]" className={s.sectionTitle} />
            <Row gutter={[16, 0]} className={s.otherSection}>
              <Col span={6}>
                <PageArtworkFrame
                  imgSrc="/images/artwork-1.jpg"
                  artworkTitle="This Artwork"
                  artworkSize="300 x 500"
                />
              </Col>
              <Col span={6}>
                <PageArtworkFrame
                  imgSrc="/images/artwork-1.jpg"
                  artworkTitle="This Artwork"
                  artworkSize="300 x 500"
                />
              </Col>
              <Col span={6}>
                <PageArtworkFrame
                  imgSrc="/images/artwork-1.jpg"
                  artworkTitle="This Artwork"
                  artworkSize="300 x 500"
                />
              </Col>
              <Col span={6}>
                <PageArtworkFrame
                  imgSrc="/images/artwork-1.jpg"
                  artworkTitle="This Artwork"
                  artworkSize="300 x 500"
                />
              </Col>
            </Row>
            <PageDividerButton>SEE MORE</PageDividerButton>
          </section>

          <section>
            <PageTitle title="You Might Also Like" className={s.sectionTitle} />
            <Row gutter={[16, 0]} className={s.otherSection}>
              <Col span={6}>
                <PageArtworkFrame
                  imgSrc="/images/artwork-2.jpg"
                  artworkTitle="This Artwork"
                  artworkSize="300 x 500"
                />
              </Col>
              <Col span={6}>
                <PageArtworkFrame
                  imgSrc="/images/artwork-3.jpg"
                  artworkTitle="This Artwork"
                  artworkSize="300 x 500"
                />
              </Col>
              <Col span={6}>
                <PageArtworkFrame
                  imgSrc="/images/artwork-4.jpg"
                  artworkTitle="This Artwork"
                  artworkSize="300 x 500"
                />
              </Col>
              <Col span={6}>
                <PageArtworkFrame
                  imgSrc="/images/artwork-5.jpg"
                  artworkTitle="This Artwork"
                  artworkSize="300 x 500"
                />
              </Col>
            </Row>
            <PageDividerButton>SEE MORE</PageDividerButton>
          </section>
        </PageContainerBox>
      </section>
    </>
  );
}

export default ArtworkDetailsPage;
