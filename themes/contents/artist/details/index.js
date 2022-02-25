// Libs
import propTypes from "prop-types";
import { Card, Col, Image, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesArtworkCard from "themes/components/libs/artwork-card";
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import { InstagramOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons";

function ThemesContentsArtistDetails(props) {
  const { artistData } = props;

  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
  // * ====================================== * //
  return (
    <>
      <ThemesContainerMain>
        <section className={s.artistDetailsSection}>
          <Card>
            <Row gutter={[64, 0]}>
              <Col
                xl={{ span: 10 }}
                lg={{ span: 10 }}
                md={{ span: 24 }}
                xs={{ span: 24 }}
                className={s.profileImage}
              >
                <Image
                  src={
                    artistData.profile
                      ? `${process.env.NEXT_PUBLIC_S3_URL}/${artistData.profile.url}`
                      : "/images/default-images.png"
                  }
                  alt=""
                />
              </Col>
              <Col
                xl={{ span: 14 }}
                lg={{ span: 14 }}
                md={{ span: 24 }}
                className={s.profileDetails}
              >
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
            <ThemesHeadline
              title="All Title"
              subtitle={`by ${artistData.full_name}`}
              className={s.artworkListTitle}
            />
            <ThemesContainerMasonry
              breakPoint={
                viewport?.width > 1024
                  ? 4
                  : viewport?.width <= 1024 && viewport?.width > 768
                  ? 3
                  : viewport?.width <= 768 && viewport?.width > 500
                  ? 2
                  : 1
              }
            >
              {artistData?.artwork
                ?.filter((item, index) => {
                  if (
                    index <
                    (viewport?.width > 1024
                      ? 8
                      : viewport?.width <= 1024 && viewport?.width > 768
                      ? 6
                      : 4)
                  )
                    return item;
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
              <ThemesButton onClick={() => router.push("/artwork")}>{`SEE MORE`}</ThemesButton>
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
