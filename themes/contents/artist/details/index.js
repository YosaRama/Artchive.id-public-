// Libs
import { useRouter } from "next/router";
import propTypes from "prop-types";
import moment from "moment";
import { Card, Col, Image, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesArtworkCard from "themes/components/libs/artwork-card";
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesShareSocial from "themes/components/libs/share-social";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import { InstagramOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons";
import { WhatsappIcon } from "public/icons/whatsapp-icon";

function ThemesContentsArtistDetails(props) {
  const { artistData } = props;
  const router = useRouter();

  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
  // * ====================================== * //
  return (
    <>
      <ThemesContainerMain>
        <section className={s.artistDetailsSection}>
          <Card className="artistDetails-card">
            <Col span={24} className={`${s.bannerImageContainer}`}>
              <Image
                src={
                  artistData?.banner
                    ? `${process.env.NEXT_PUBLIC_S3_URL}/${artistData?.banner?.url}`
                    : "/images/default-images.jpg"
                }
                alt=""
              />
            </Col>
            <Row
              gutter={[64, 0]}
              style={{ marginRight: 0, marginLeft: 0 }}
              className={s.profileContainer}
            >
              <Col
                xl={{ span: 8 }}
                lg={{ span: 10 }}
                md={{ span: 24 }}
                xs={{ span: 24 }}
                className={`${s.profileImageContainer} artistDetails-profileImageContainer`}
              >
                <div className={s.profileImageBox}>
                  <Image
                    src={
                      artistData?.profile
                        ? `${process.env.NEXT_PUBLIC_S3_URL}/${artistData?.profile?.url}`
                        : "/images/default-images.png"
                    }
                    alt=""
                    className={s.profileImage}
                  />
                </div>
              </Col>
              <Col
                xl={{ span: 16 }}
                lg={{ span: 14 }}
                md={{ span: 24 }}
                className={s.profileDetails}
              >
                <div className={s.profileDetailsContent}>
                  <h1 className={s.artistName}>{artistData.full_name}</h1>
                  <p className={s.artistDate}>
                    {artistData.city && `${artistData.city},`}
                    {artistData.birth_date && moment(artistData.birth_date).format("DD MMMM YYYY")}
                  </p>
                </div>

                <div className={`${s.profileDetailsContent} `}>
                  <p className={s.artistBio}>{artistData.biography}</p>
                </div>

                <div className={s.socialProfileContainer}>
                  <ThemesShareSocial
                    mail={true}
                    facebook={true}
                    whatsapp={true}
                    subject={`${artistData.full_name} Profile on Artchive.id`}
                    message={`${artistData.full_name} Profile on Artchive.id, all information about artist will serve on this sites`}
                    url={`${process.env.NEXT_PUBLIC_SITE_URL}artist/${router.query.slug}`}
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </section>

        {artistData?.artwork.length != 0 && (
          <section>
            <ThemesHeadline
              title="All Artwork"
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
                  if (index < 4) return item;
                })
                ?.map((item, index) => {
                  return (
                    <ThemesArtworkCard
                      key={index}
                      artistCity={artistData.city}
                      artistName={artistData.full_name}
                      artworkHeight={item.height}
                      artworkMedia={item.material}
                      artworkPrice={item.markup_price}
                      artworkUrl={`/artwork/${item.slug}`}
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
              <ThemesButton
                onClick={() =>
                  router.push(`/artwork?artistName=${encodeURIComponent(artistData.full_name)}`)
                }
              >{`SEE MORE`}</ThemesButton>
            </section>
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
