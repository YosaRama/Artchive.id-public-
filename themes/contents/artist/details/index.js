// Libs
import propTypes from "prop-types";
import { Card, Col, Image, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";

// Styles
import s from "./index.module.scss";

// Icons
import { InstagramOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesArtworkCard from "themes/components/libs/artwork-card";
import ThemesButton from "themes/components/libs/button";

function ThemesContentsArtistDetails(props) {
  const { artistData } = props;
  console.log(artistData);
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
      <ThemesContainerMain>
        <section className={s.artistDetailsSection}>
          <Card>
            <Row gutter={[64, 0]}>
              <Col span={10} className={s.profileImage}>
                <Image
                  src={
                    artistData.profile
                      ? `${process.env.NEXT_PUBLIC_S3_URL}/${artistData.profile.url}`
                      : "/images/default-images.png"
                  }
                  alt=""
                />
              </Col>
              <Col span={14} className={s.profileDetails}>
                <div className={s.profileDetailsContent}>
                  <p className={s.artistLocation}>{artistData.city}</p>
                  <h1 className={s.artistName}>{artistData.full_name}</h1>
                  <p className={s.artistDate}>22 October 1997</p>
                </div>

                <div className={`${s.profileDetailsContent} `}>
                  <p className={s.artistBio}>{artistData.biography}</p>
                </div>

                <div className={s.socialProfile}>
                  <Row gutter={[12, 0]}>
                    <a href={`mailto:${artistData.email}`}>
                      <Col>
                        <MailOutlined className={s.socialIcon} />
                      </Col>
                    </a>
                    {artistData.instagram_url && (
                      <a href={artistData.instagram_url} target={"_blank"} rel="noreferrer">
                        <Col>
                          <InstagramOutlined className={s.socialIcon} />
                        </Col>
                      </a>
                    )}
                    {artistData.facebook_url && (
                      <a href={artistData.facebook_url} target={"_blank"} rel="noreferrer">
                        <Col>
                          <FacebookOutlined className={s.socialIcon} />
                        </Col>
                      </a>
                    )}
                  </Row>
                </div>
              </Col>
            </Row>
          </Card>
        </section>

        {artistData?.artwork.length != 0 && (
          <section>
            <h1 className={s.artworkListTitle}>{`All Artwork by ${artistData.full_name}`}</h1>
            <ThemesContainerMasonry breakPoint={4}>
              {artistData?.artwork
                ?.filter((item, index) => {
                  if (index < 6) return item;
                })
                ?.map((item, index) => {
                  return (
                    <ThemesArtworkCard
                      key={index}
                      artistCity="Bali"
                      artistName="Yosa Rama"
                      artworkHeight={item.height}
                      artworkMedia={item.material}
                      artworkPrice={item.price}
                      artworkSlug={item.slug}
                      artworkStatus={item.status}
                      artworkTitle={item.title}
                      artworkWidth={item.width}
                      artworkYear={item.year}
                      imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item.media_cover.url}`}
                    />
                  );
                })}
            </ThemesContainerMasonry>

            <section className={s.divider}>
              <ThemesButton onClick={() => router.push("/artwork")}>
                {`SEE MORE ARTWORK FROM ${artistData.full_name.toUpperCase()}`}
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
        )}
      </ThemesContainerMain>
    </>
  );
}

ThemesContentsArtistDetails.propTypes = {
  artistData: propTypes.object,
};

export default ThemesContentsArtistDetails;
