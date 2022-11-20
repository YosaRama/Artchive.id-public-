// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row, Carousel, Image, Divider, Card } from "antd";
import { useViewportScroll, motion, useTransform, useMotionValue } from "framer-motion";
import {
  InstagramOutlined,
  FacebookOutlined,
  RightOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  BookOutlined,
} from "@ant-design/icons";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtistCard from "themes/components/libs/artist-card";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesBanner from "themes/components/libs/banner";
import ThemesHomepageSearchBox from "themes/components/libs/homepage-search-box";
import ThemesHeadline from "themes/components/libs/headline";
import ThemesHomepageExhibitionSection from "themes/components/libs/homepage-exhibition";
import ThemesHomepageReviewSection from "themes/components/libs/homepage-review-section";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesArticleListCard from "themes/components/libs/article-list-card";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";
import { useHorizontalScroll } from "app/helpers/horizontalScroll";

// Data Hook
import { useArticlesLoad } from "app/hooks/articles";

// Styles
import s from "./index.module.scss";
import {
  fadeTopToBottom,
  fadeTopToBottomShowcase,
  fading,
  fadingExit,
} from "app/database/framer-motion";
import ThemesButton from "themes/components/libs/button";

function ThemesContentsHomepageV2(props) {
  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
  // * ====================================== * //

  //? ============== Articles Hooks ============= ?//
  const { data: articleListData, total: articleListDataTotal } = useArticlesLoad({ limit: 6 });
  // * ====================================== * //

  const { artworkData, artistData } = props;
  const router = useRouter();
  const scrollRef = useHorizontalScroll();
  const carouselUserPreview = {
    className: s.carouselUserPreview,
    infinite: true,

    speed: 500,
    centerMode: true,
    arrows: true,
    adaptiveHeight: true,
    centerPadding: "0px",
    draggable: true,
    autoplay: true,
    pauseOnFocus: true,
  };

  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      {/* <ThemesBanner imgSrc="/images/banner-homepage.jpg"> */}
      <ThemesBanner imgSrc="/images/banner-homepage-1.jpg">
        <motion.div
          variants={fadeTopToBottomShowcase}
          initial="hidden"
          whileInView="visible"
          className={s.searchBox}
        >
          <ThemesHomepageSearchBox />
        </motion.div>
      </ThemesBanner>

      {/* // * ====================================== * // */}

      {/* //? ============== Artwork Section ============= ?// */}
      <Col style={{ padding: "120px 0px", background: "white" }}>
        <ThemesContainerMain>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
            gutter={[40, 0]}
          >
            <Col span={8}>
              <h1 style={{ fontSize: 48, lineHeight: "65px" }}>
                The best <span style={{ color: "#e5890a" }}>Artworks</span> you ever see!
              </h1>
              <p style={{ fontSize: 18, lineHeight: "30px" }}>
                We help artist to show their artworks and also help collectors to find the best fit
                artwork they need! Find out more about our artist latest artwork and pocket it!
              </p>
              <ThemesButton type={" default"} style={{ marginTop: "22px" }}>
                DISCOVER MORE
              </ThemesButton>
            </Col>
            <Col span={16}>
              <Row gutter={(20, 20)} className={s.slider} ref={scrollRef}>
                {artworkData.map((item, index) => (
                  <Col
                    // xl={{ span: 6 }}
                    // lg={{ span: 7 }}
                    // md={{ span: 11 }}
                    // xs={{ span: 19 }}
                    span={10}
                    key={index}
                    className={s.sliderItem}
                  >
                    <ThemesArtworkWithFrame
                      artworkSlug={`/artwork/${item.slug}`}
                      artworkTitle={item.title}
                      artworkSize={item.size}
                      imgSrc={item.imgUrl}
                      artworkStatus={item.status}
                      style={{ margin: "0px 10px", width: 300, height: 300 }}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </ThemesContainerMain>
      </Col>
      <ThemesContainerMain>
        {/* //? ============== Artist Sections ============= ?// */}
        <Col style={{ marginTop: "120px" }}>
          <Row
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
          >
            <Col span={15}>
              <Row gutter={(20, 20)} className={s.slider} ref={scrollRef}>
                {artistData.map((item, index) => (
                  <Col
                    // xl={{ span: 6 }}
                    span={10}
                    // lg={{ span: 7 }}
                    // md={{ span: 11 }}
                    // xs={{ span: 21 }}
                    key={index}
                    className={s.sliderIten}
                  >
                    <ThemesArtistCard
                      artistId={item.id}
                      artistSlug={item.slug}
                      artistName={item.name}
                      artistCity={item.city}
                      avatarSrc={item.avatar}
                      bannerSrc={item.artwork}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col span={8} className={s.ctaRow}>
              <h1 style={{ fontSize: 48, lineHeight: "65px" }}>
                Our New <span style={{ color: "#E5890A" }}>Artists</span> with Stunning Talent!
              </h1>
              <p style={{ fontSize: 18, lineHeight: "32px" }}>
                The artist is not a different kind of person, but every person is a different kind
                of artist.{" "}
              </p>
              <ThemesButton type={"default"} style={{ marginTop: "15px" }}>
                DISCOVER MORE
              </ThemesButton>
            </Col>
          </Row>
        </Col>
      </ThemesContainerMain>

      {/* //? ============== Exhibition List ============= ?// */}
      <Col style={{ marginTop: "120px" }}>
        <Image
          src="/images/homepage-banner-list-1.jpg"
          alt="exhibition"
          preview={false}
          className={s.exhibitionBackground}
        />
        <Col>
          <ThemesContainerMain>
            <Row span={24} className={s.exhibitionContainer}>
              <Col className={s.description}>
                <p>EXHIBITIONS</p>
                <h1>DRAWING EXHIBITION</h1>
                <p>
                  First drawing exhibition in Indonesia by Forum Drawing Exhibition on Ubud, Bali
                  Collaborate with Jepun Artfriends 15th May - 29th May
                </p>
                <Row gutter={[20, 20]}>
                  <Col>
                    <ThemesButton>GO TO EXHIBITION</ThemesButton>
                  </Col>
                  <Col>
                    <ThemesButton type={" outlined"}>SEE ALL EXHIBITION</ThemesButton>
                  </Col>
                </Row>
              </Col>
              <Col span={8} className={s.moreExhibitionContainer}>
                <Col className={s.list}>
                  <ThemesHomepageExhibitionSection />
                  <ThemesHomepageExhibitionSection />
                  <ThemesHomepageExhibitionSection />
                </Col>
              </Col>
            </Row>
          </ThemesContainerMain>
        </Col>
      </Col>

      {/* //? ============== Our Roles ============= ?// */}
      <Col className={s.roleContainer}>
        <ThemesContainerMain>
          <ThemesHeadline
            title="Your Roles"
            subtitle="Artchive.id platform divided into several roles"
            className={s.pageTitle}
          />
          <Col span={24}>
            <Row>
              <Col span={12} className={s.imageContainer}>
                <Image
                  src="/images/homepage-role-artist.jpg"
                  alt=""
                  preview={false}
                  className={s.image}
                />
              </Col>
              <Col span={12} className={s.descriptionContainer}>
                <Col span={24} className={s.description}>
                  {" "}
                  <h1>ARTIST</h1>
                  <Col className={s.divider} />
                  <h4>Show Artwork | Sell Artwork | Manage Profile</h4>
                  <p>
                    a person who creates art (such as painting, sculpture, music, or writing) using
                    conscious skill and creative imagination. the great artists of the Renaissance.
                    an artist specializing in watercolors. : a person skilled in any of the arts.
                  </p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col span={12} className={s.descriptionContainer}>
                <Col span={24} className={s.description}>
                  {" "}
                  <h1>ART COLLECTOR</h1>
                  <Col className={s.divider} />
                  <h4>Buy Artwork | Show Collection | Trade Collection</h4>
                  <p>
                    a person who creates art (such as painting, sculpture, music, or writing) using
                    conscious skill and creative imagination. the great artists of the Renaissance.
                    an artist specializing in watercolors. : a person skilled in any of the arts.
                  </p>
                </Col>
              </Col>
              <Col span={12} className={s.imageContainer}>
                <Image
                  src="/images/homepage-role-collector.jpg"
                  alt=""
                  preview={false}
                  className={s.image}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12} className={s.imageContainer}>
                <Image
                  src="/images/homepage-role-gallery.jpg"
                  alt=""
                  preview={false}
                  className={s.image}
                />
              </Col>
              <Col span={12} className={s.descriptionContainer}>
                <Col span={24} className={s.description}>
                  {" "}
                  <h1>GALLERY</h1>
                  <Col className={s.divider} />
                  <h4>Manage Gallery | Do Online Transaction | Do Exhibition</h4>
                  <p>
                    a person who creates art (such as painting, sculpture, music, or writing) using
                    conscious skill and creative imagination. the great artists of the Renaissance.
                    an artist specializing in watercolors. : a person skilled in any of the arts.
                  </p>
                </Col>
              </Col>
            </Row>
          </Col>
        </ThemesContainerMain>
      </Col>

      {/* //? ============== What We Offer Section ============= ?// */}
      <Col className={s.offer}>
        <ThemesContainerMain>
          <ThemesHeadline
            title="What We Offer"
            subtitle="Various offer to upgrade you popularity"
            className={s.pageTitle}
          />
          <Row gutter={(20, 20)} className={s.offerContainer}>
            <Col span={7} className={s.description}>
              <Col className={s.artistImage}>
                <Col className={s.icon}>
                  <BookOutlined />
                </Col>
              </Col>
              <Col>
                <h1>Artist Management</h1>
                <p>
                  We let you manage your own profile and show the world your artworks. Hey,
                  Collector could buy artwork from you!
                </p>
              </Col>
            </Col>
            <Col span={7} className={s.description}>
              <Col className={s.artistImage}>
                <Col className={s.icon}>
                  <BookOutlined />
                </Col>
              </Col>{" "}
              <Col>
                <h1>Collector Management</h1>
                <p>
                  We let you collect artworks from our artist, trade your collection with other
                  collectors, and you can show it on your profile!
                </p>
              </Col>
            </Col>
            <Col span={7} className={s.description}>
              <Col className={s.artistImage}>
                <Col className={s.icon}>
                  <BookOutlined />
                </Col>
              </Col>{" "}
              <Col>
                <h1>Gallery Management</h1>
                <p>
                  Gallery is a wonderful place to exhibit paintings. We have got you a landing page
                  that matches your gallery themes!
                </p>
              </Col>
            </Col>
          </Row>
          <Col className={s.offerContainer}>
            <Col span={7} className={s.description}>
              <Col className={s.artistImage}>
                <Col className={s.icon}>
                  <BookOutlined />
                </Col>
              </Col>{" "}
              <Col>
                <h1>Archive Artworks</h1>
                <p>
                  We gonna archive all of your artworks so the existence of your artwork would never
                  went missing!
                </p>
              </Col>
            </Col>
          </Col>
        </ThemesContainerMain>
      </Col>
      {/* // * ====================================== * // */}

      {/* //? ============== Article Section ============= ?// */}
      <Col className={s.articleContainer}>
        <ThemesContainerMain>
          <ThemesHeadline
            title="News Update"
            subtitle="We provide you latest art info"
            className={s.pageTitle}
          />

          <ThemesContainerMasonry
            breakPoint={
              viewport?.width > 768 ? 3 : viewport?.width <= 768 && viewport?.width > 500 ? 2 : 1
            }
            className={s.articleListContainer}
            columnClassName={s.articleListCard}
          >
            {articleListData &&
              articleListData?.map((item, index) => {
                return (
                  <ThemesArticleListCard
                    className={s.articleListContent}
                    key={index}
                    title={item.title}
                    shortDescription={item.short_description}
                    author={item.author}
                    postDate={item.updated_at}
                    thumbnailSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item.thumbnail.url}`}
                    url={`/articles/${item.slug}`}
                  />
                );
              })}
          </ThemesContainerMasonry>
        </ThemesContainerMain>
      </Col>

      {/* //? ============== Testimonials Section ============= ?// */}

      <Col className={s.reviewContainer}>
        <Image
          src="/images/homepage-banner-list-1.jpg"
          alt="exhibition"
          preview={false}
          className={s.reviewBackground}
        />

        <ThemesContainerMain>
          <Col className={s.container}>
            <Col>
              <ThemesHeadline
                title="What They Say About Us"
                subtitle="Take a look at our users testimonials"
                className={s.pageTitle}
              />
              <Col span={24} className={s.review}>
                <Carousel {...carouselUserPreview}>
                  <ThemesHomepageReviewSection />
                  <ThemesHomepageReviewSection />
                  <ThemesHomepageReviewSection />
                </Carousel>
              </Col>
            </Col>
          </Col>
        </ThemesContainerMain>
      </Col>

      {/* // * ====================================== * // */}
    </>
  );
}

ThemesContentsHomepageV2.propTypes = {
  artworkData: propTypes.array,
  artistData: propTypes.array,
};

export default ThemesContentsHomepageV2;
