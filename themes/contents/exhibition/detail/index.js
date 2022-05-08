/* eslint-disable @next/next/no-img-element */

// Libs
import { Col, Row } from "antd";

// Components
import ThemesButton from "themes/components/libs/button";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesArtworkCard from "themes/components/libs/artwork-card";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesContainerMain from "themes/components/container/main";
import ThemesMapsGoogleLocation from "themes/components/libs/maps-google-location";
import ThemesThumbnailCard from "themes/components/libs/thumbnail-card";
import ThemesArticleCard from "themes/components/libs/article-card";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import { ClockCircleOutlined, CalendarOutlined, PushpinOutlined } from "@ant-design/icons";

function ThemesContentsExhibitionDetails() {
  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
  // * ====================================== * //

  //? ============== Artwork Hook ============= ?//
  const artworkDummyData = [{}, {}, {}, {}];
  // * ====================================== * //

  return (
    <>
      {/* //? ============== Artwork List Section ============= ?// */}
      <section className={s.section}>
        <ThemesContainerMain>
          <Col className={s.titleContainer}>
            <ThemesHeadline
              title="Exhibition Title"
              subtitle="short description lorem ipsum dolor sit amet"
            />
            <ThemesButton type={`primary ${s.catalogueButton}`}>VIEW CATALOGUE</ThemesButton>
          </Col>
          <section className={s.artworkListContainer}>
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
              {artworkDummyData.map((item, index) => {
                return (
                  <Col key={index}>
                    <ThemesArtworkCard
                      artistName="Yosa"
                      artistCity="Denpasar"
                      artworkHeight={20}
                      artworkMedia="Acrylic_on_canvas"
                      artworkPrice="8000000"
                      artworkSlug="slug"
                      artworkStatus="EXHIBITION"
                      artworkTitle="Artwork Title"
                      artworkWidth={80}
                      artworkYear="2022"
                      imgSrc={`/images/artwork-${index + 1}.jpg`}
                    />
                  </Col>
                );
              })}
            </ThemesContainerMasonry>
          </section>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Press Release Section ============= ?// */}
      <section className={`${s.whiteSection} ${s.section}`}>
        <ThemesContainerMain>
          <Col>
            <h1 className={s.title}>Press Release</h1>
            <Col>
              <Row gutter={16}>
                <Col span={12} className={s.pressImageContainer}>
                  <img
                    src="/images/artwork-1.jpg"
                    className={`${s.pressImage} ${s.pressLargeImage}`}
                    alt=""
                  />
                </Col>
                <Col span={12} className={s.pressImageContainer}>
                  <Row gutter={16} className={s.pressImageContainer}>
                    <Col span={12} className={s.pressHalfImageContainer}>
                      <img
                        src="/images/artwork-1.jpg"
                        className={`${s.pressImage} ${s.pressHalfImage}`}
                        alt=""
                      />
                    </Col>
                    <Col span={12} className={s.pressHalfImageContainer}>
                      <img
                        src="/images/artwork-1.jpg"
                        className={`${s.pressImage} ${s.pressHalfImage}`}
                        alt=""
                      />
                    </Col>
                    <Col span={12} className={s.pressHalfImageContainer}>
                      <img
                        src="/images/artwork-1.jpg"
                        className={`${s.pressImage} ${s.pressHalfImage}`}
                        alt=""
                      />
                    </Col>
                    <Col span={12} className={s.pressHalfImageContainer}>
                      <img
                        src="/images/artwork-1.jpg"
                        className={`${s.pressImage} ${s.pressHalfImage}`}
                        alt=""
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <p className={s.pressDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At accumsan tellus sed nec
              nunc elit tincidunt morbi. Amet cras viverra leo non neque tortor. Cursus faucibus
              leo, vitae, eros quisque maecenas sagittis. Eget aliquam eget mi ac sit. Feugiat
              neque, aliquam suspendisse tellus lobortis ligula consequat laoreet nec. Non mattis
              amet dis congue. Varius fusce tincidunt vestibulum luctus amet porttitor sed. Turpis
              duis dui vulputate nisl urna. Est nunc a pellentesque justo semper enim felis, est et.
              Malesuada hendrerit habitasse luctus aenean. Quis sociis potenti risus massa felis,
              egestas habitant vulputate quis. Iaculis purus feugiat fames urna congue adipiscing.
              Tellus pretium aliquet cursus vitae eget etiam quam laoreet dictum. Amet quis vitae
              curabitur volutpat est sit nisl sed.
            </p>
          </Col>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Location Section ============= ?// */}
      <section className={s.section}>
        <ThemesContainerMain>
          <h1 className={s.title}>Location & Time</h1>
          <Col span={24}>
            <Row gutter={16}>
              <Col span={8} className={s.locTimeDetailsContainer}>
                <h1>
                  <span>
                    <CalendarOutlined />{" "}
                  </span>
                  Date
                </h1>
                <h4>Start Date - End Date Year</h4>
              </Col>
              <Col span={8} className={s.locTimeDetailsContainer}>
                <h1>
                  <span>
                    <PushpinOutlined />{" "}
                  </span>
                  Location
                </h1>
                <h4>Location</h4>
              </Col>
              <Col span={8} className={s.locTimeDetailsContainer}>
                <h1>
                  <span>
                    <ClockCircleOutlined />{" "}
                  </span>
                  Time
                </h1>
                <h4>Start Time - End Time</h4>
              </Col>
              <Col span={24} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <ThemesMapsGoogleLocation />
              </Col>
            </Row>
          </Col>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Artist Section ============= ?// */}
      <section className={`${s.whiteSection} ${s.section}`}>
        <ThemesContainerMain>
          <h1 className={s.title}>Artist On Exhibition</h1>
          <Row>
            <Col span={12}>
              <ThemesThumbnailCard
                title="Yosa Rama"
                subtitle="Denpasar"
                // profile="/images/profile-1.jpg"
              />
            </Col>
          </Row>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Article Section ============= ?// */}
      <section className={s.section}>
        <ThemesContainerMain>
          <h1 className={s.title}>Article For You</h1>
          <Row gutter={16}>
            <Col span={8}>
              <ThemesArticleCard />
            </Col>
            <Col span={8}>
              <ThemesArticleCard />
            </Col>
            <Col span={8}>
              <ThemesArticleCard />
            </Col>
          </Row>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

export default ThemesContentsExhibitionDetails;
