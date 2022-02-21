// Libs
import { Card, Col, Image, Row } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container";

// Styles
import s from "./index.module.scss";

// Icons
import { InstagramOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons";
import MasonryContainer from "themes/components/container/masonry-container";
import ThemesArtworkCard from "themes/components/libs/artwork-card";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";
import ThemesButton from "themes/components/libs/button";

function PageArtistDetails() {
  //? ============== Artwork Hook ============= ?//
  const artworkData = [
    {
      height: 500,
      media: "Acrylic on Canvas",
      price: "5.000.000",
      slug: "love",
      status: "PUBLISH",
      title: "Love",
      width: 500,
      year: "2022",
      url: "/images/artwork-2.jpg",
    },
    {
      height: 500,
      media: "Acrylic on Canvas",
      price: "5.000.000",
      slug: "love",
      status: "PUBLISH",
      title: "Love",
      width: 500,
      year: "2022",
      url: "/images/artwork-3.jpg",
    },
    {
      height: 500,
      media: "Acrylic on Canvas",
      price: "5.000.000",
      slug: "love",
      status: "PUBLISH",
      title: "Love",
      width: 500,
      year: "2022",
      url: "/images/artwork-1.jpg",
    },
    {
      height: 500,
      media: "Acrylic on Canvas",
      price: "5.000.000",
      slug: "love",
      status: "PUBLISH",
      title: "Love",
      width: 500,
      year: "2022",
      url: "/images/artwork-4.jpg",
    },
    {
      height: 500,
      media: "Acrylic on Canvas",
      price: "5.000.000",
      slug: "love",
      status: "PUBLISH",
      title: "Love",
      width: 500,
      year: "2022",
      url: "/images/artwork-5.jpg",
    },
    {
      height: 500,
      media: "Acrylic on Canvas",
      price: "5.000.000",
      slug: "love",
      status: "PUBLISH",
      title: "Love",
      width: 500,
      year: "2022",
      url: "/images/artwork-7.jpg",
    },
    {
      height: 500,
      media: "Acrylic on Canvas",
      price: "5.000.000",
      slug: "love",
      status: "PUBLISH",
      title: "Love",
      width: 500,
      year: "2022",
      url: "/images/artwork-6.jpg",
    },
    {
      height: 500,
      media: "Acrylic on Canvas",
      price: "5.000.000",
      slug: "love",
      status: "PUBLISH",
      title: "Love",
      width: 500,
      year: "2022",
      url: "/images/artwork-1.jpg",
    },
  ];
  // * ====================================== * //
  return (
    <>
      <PageContainerBox>
        <section className={s.artistDetailsSection}>
          <Card>
            <Row gutter={[64, 0]}>
              <Col span={10} className={s.profileImage}>
                <Image src="/images/profile-5.jpg" alt="" />
              </Col>
              <Col span={14} className={s.profileDetails}>
                <div className={s.profileDetailsContent}>
                  <p className={s.artistLocation}>Bali</p>
                  <h1 className={s.artistName}>I Putu Yosa Rama Dinata</h1>
                  <p className={s.artistDate}>22 October 1997</p>
                </div>

                <div className={`${s.profileDetailsContent} `}>
                  <p className={s.artistBio}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div className={s.socialProfile}>
                  <Row gutter={[12, 0]}>
                    <a href="mailto:yosamelody07@gmail.com">
                      <Col>
                        <MailOutlined className={s.socialIcon} />
                      </Col>
                    </a>
                    <a href="https://www.instagram.com" target={"_blank"} rel="noreferrer">
                      <Col>
                        <InstagramOutlined className={s.socialIcon} />
                      </Col>
                    </a>
                    <a href="https://www.facebook.com" target={"_blank"} rel="noreferrer">
                      <Col>
                        <FacebookOutlined className={s.socialIcon} />
                      </Col>
                    </a>
                  </Row>
                </div>
              </Col>
            </Row>
          </Card>
        </section>

        <section>
          <h1 className={s.artworkListTitle}>{`All Artwork by ${"Yosa Rama"}`}</h1>
          <MasonryContainer breakPoint={4}>
            {artworkData?.map((item, index) => {
              return (
                <ThemesArtworkCard
                  key={index}
                  artistCity="Bali"
                  artistName="Yosa Rama"
                  artworkHeight={item.height}
                  artworkMedia={item.media}
                  artworkPrice={item.price}
                  artworkSlug={item.slug}
                  artworkStatus={item.status}
                  artworkTitle={item.title}
                  artworkWidth={item.width}
                  artworkYear={item.year}
                  imgSrc={item.url}
                />
              );
            })}
          </MasonryContainer>

          <section className={s.divider}>
            <ThemesButton onClick={() => router.push("/artwork")}>
              SEE MORE ARTWORK FROM YOSA RAMA
            </ThemesButton>
          </section>

          {/* <Row gutter={[16, 32]}>
            {artworkData?.map((item, index) => {
              return (
                <Col key={index} span={6}>
                  <ThemesArtworkWithFrame
                    artworkSize="200 x 300"
                    artworkSlug="love"
                    artworkStatus={item.status}
                    artworkTitle={item.title}
                    imgSrc={item.url}
                  />
                </Col>
              );
            })}
          </Row> */}
          {/* <section className={s.divider}>
            <ThemesDividerWithButton onClick={() => router.push("/artwork")}>SEE MORE</ThemesDividerWithButton>
          </section> */}
        </section>
      </PageContainerBox>
    </>
  );
}

export default PageArtistDetails;
