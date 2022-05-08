// Libs
import { useRouter } from "next/router";
import { Avatar, Col, Divider, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContentsArtworkDetailsInformation from "themes/contents/artwork/details/information";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";

// Dummy Data
import { artworkDetailsDummyData, artworkListDummyData } from "app/database/dummy/artwork";

// Styles
import s from "./index.module.scss";

function ThemesContentsExhibitionArtwork() {
  const router = useRouter();
  return (
    <>
      {/* //? ============== Artwork Details Information Section ============= ?// */}
      <section className={s.section}>
        <ThemesContainerMain>
          <ThemesContentsArtworkDetailsInformation artworkData={artworkDetailsDummyData} />
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
            <Avatar src="/images/profile-1.jpg" className={s.artistAvatar} />
          </Col>
          <Col>
            <Col className={s.artistNameContainer}>
              <h1>Artist Name</h1>
            </Col>
            <Col className={s.artistCityContainer}>
              <h4>Artist City</h4>
            </Col>
            <Col className={s.artistDescriptionContainer}>
              <p>Artist Description</p>
            </Col>
            <Col className={s.artistDividerContainer}>
              <Divider className={s.artistDivider} />
            </Col>
          </Col>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Other Artwork on Exhibition Section ============= ?// */}
      <section className={s.section}>
        <ThemesContainerMain>
          <ThemesHeadline
            title="Artwork"
            subtitle="Original artwork by our artist"
            className={s.otherArtworkTitleContainer}
          />
          <Row gutter={[16, 0]}>
            {artworkListDummyData?.map((item, index) => (
              <Col
                xl={{ span: 6 }}
                lg={{ span: 7 }}
                md={{ span: 11 }}
                xs={{ span: 19 }}
                key={index}
              >
                <ThemesArtworkWithFrame
                  artworkSlug={item.slug}
                  artworkTitle={item.title}
                  artworkSize={item.size}
                  imgSrc={item.imgUrl}
                  artworkStatus={item.status}
                />
              </Col>
            ))}
          </Row>
          <section className={s.otherArtworkDivider}>
            <ThemesDividerWithButton onClick={() => router.push("/artwork")}>
              SEE MORE
            </ThemesDividerWithButton>
          </section>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

export default ThemesContentsExhibitionArtwork;
