// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Avatar, Col, Divider, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContentsArtworkDetailsInformation from "themes/contents/artwork/details/information";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";

// Styles
import s from "./index.module.scss";
import { useExhibition } from "app/hooks/exhibition";

function ThemesContentsExhibitionArtwork(props) {
  const { artworkDetails } = props;

  //? ============== Exhibition Hook ============= ?//
  const { data: exhibitionData } = useExhibition({ singleId: artworkDetails?.exhibition_id });
  const otherArtworkList = exhibitionData?.artworks?.filter((item) => item.id != artworkDetails.id);
  // * ====================================== * //

  const router = useRouter();
  return (
    <>
      {/* //? ============== Artwork Details Information Section ============= ?// */}
      <section className={s.section}>
        <ThemesContainerMain>
          <ThemesContentsArtworkDetailsInformation artworkData={artworkDetails} />
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Artist Details Information Section ============= ?// */}
      <section className={`${s.section} ${s.whiteSection} ${s.artistSection}`}>
        <ThemesContainerMain>
          <Col className={s.artistTitleContainer}>
            <h1>About Artist</h1>
          </Col>
          <Col className={s.artistAvatarContainer}>
            <Avatar
              src={
                artworkDetails.artist.profile
                  ? `${process.env.NEXT_PUBLIC_S3_URL}/${artworkDetails.artist.profile.url}`
                  : "/images/profile-default.png"
              }
              className={s.artistAvatar}
            />
          </Col>
          <Col>
            <Col className={s.artistNameContainer}>
              <h1>{artworkDetails.artist.full_name}</h1>
            </Col>
            <Col className={s.artistCityContainer}>
              <h4>{artworkDetails.artist?.city}</h4>
            </Col>
            <Col className={s.artistDescriptionContainer}>
              <p>{artworkDetails?.artist?.biography}</p>
            </Col>
            <Col className={s.artistDividerContainer}>
              <Divider className={s.artistDivider} />
            </Col>
          </Col>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Other Artwork on Exhibition Section ============= ?// */}
      {otherArtworkList && (
        <section className={s.section}>
          <ThemesContainerMain>
            <ThemesHeadline
              title="Other Artwork"
              subtitle="see other artwork from this exhibition"
              className={s.otherArtworkTitleContainer}
            />
            <Row gutter={[16, 0]} className={s.otherArtworkListContainer}>
              {otherArtworkList?.map((item, index) => (
                <Col
                  xl={{ span: 6 }}
                  lg={{ span: 7 }}
                  md={{ span: 11 }}
                  xs={{ span: 19 }}
                  key={index}
                >
                  <ThemesArtworkWithFrame
                    artworkSlug={`/exhibition/${exhibitionData.slug}/artwork/${item.slug}`}
                    artworkTitle={item.title}
                    artworkSize={item.size}
                    imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item.media_cover.url}`}
                    artworkStatus={item.status}
                  />
                </Col>
              ))}
            </Row>
            <section className={s.otherArtworkDivider}>
              <ThemesDividerWithButton
                onClick={() => router.push(`/exhibition/${exhibitionData.slug}`)}
              >
                SEE MORE
              </ThemesDividerWithButton>
            </section>
          </ThemesContainerMain>
        </section>
      )}
      {/* // * ====================================== * // */}
    </>
  );
}

ThemesContentsExhibitionArtwork.propTypes = {
  artworkDetails: propTypes.any,
};

export default ThemesContentsExhibitionArtwork;
