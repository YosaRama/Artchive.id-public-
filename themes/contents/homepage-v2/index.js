// Libs
import Image from "next/image";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row, Carousel } from "antd";
import { motion } from "framer-motion";
import { fadeTopToBottomShowcase } from "app/database/framer-motion";

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
import ThemesButton from "themes/components/libs/button";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";
import { useHorizontalScroll } from "app/helpers/horizontalScroll";

// Data Hook
import { useArticlesLoad } from "app/hooks/articles";

// Styles
import s from "./index.module.scss";

// Icons
import { BookOutlined } from "@ant-design/icons";
import ThemesContentsHomepageV2BannerSection from "./banner-section";
import ThemesContentsHomepageV2ArtworkArtistSection from "./artwork-artist-section";
import ThemesContentsHomepageV2ExhibitionListSection from "./exhibition-list-section";
import ThemesContentsHomepageV2OurRolesSection from "./our-roles-section";
import ThemesContentsHomepageV2WhatOfferSection from "./what-offer-section";
import ThemesContentsHomepageV2ArticleListSection from "./article-list-section";
import ThemesContentsHomepageV2TestimonialSection from "./testimonial-section";

function ThemesContentsHomepageV2(props) {
  const { artworkData, artistData } = props;

  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
  const { width } = useWindowSize();

  // * ====================================== * //

  //? ============== Articles Hooks ============= ?//
  const { data: articleListData, total: articleListDataTotal } = useArticlesLoad({ limit: 3 });
  // * ====================================== * //

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

  const offerList = [
    {
      icon: <BookOutlined />,
      offer: "Artist Management",
      description:
        "We let you manage your own profile and show the world your artworks. Hey, Collector could buy artwork from you!",
    },
    {
      icon: <BookOutlined />,
      offer: "Collector Management",
      description:
        "We let you collect artworks from our artist, trade your collection with othercollectors, and you can show it on your profile!",
    },
    {
      icon: <BookOutlined />,
      offer: "Gallery Management",
      description:
        "Gallery is a wonderful place to exhibit paintings. We have got you a landing pagethat matches your gallery themes!",
    },
  ];

  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      <section>
        <ThemesContentsHomepageV2BannerSection />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Artwork Section ============= ?// */}
      <section className={s.artworkContainer}>
        <ThemesContentsHomepageV2ArtworkArtistSection
          listData={artworkData}
          title={`<h1>The best <span>Artworks</span> you ever see!</h1>`}
          description={
            "We help artist to show their artworks and also help collectors to find the best fit artwork they need! Find out more about our artist latest artwork and pocket it!"
          }
          buttonText="DISCOVER MORE"
          listDataType="artwork"
        />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Artist Sections ============= ?// */}
      <section>
        <ThemesContentsHomepageV2ArtworkArtistSection
          listData={artistData}
          title={`<h1>Our New <span>Artists</span> with Stunning Talent!</h1>`}
          description={
            "The artist is not a different kind of person, but every person is a different kind of artist."
          }
          buttonText="DISCOVER MORE"
          listDataType="artist"
          textPosition="right"
        />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Exhibition List ============= ?// */}
      <section>
        <ThemesContentsHomepageV2ExhibitionListSection />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Our Roles ============= ?// */}
      <section className={s.roleContainer}>
        <ThemesHeadline
          title="Your Roles"
          subtitle="Artchive.id platform divided into several roles"
          className={s.pageTitle}
        />
        <ThemesContentsHomepageV2OurRolesSection
          title="ART COLLECTOR"
          subtitle="Buy Artwork | Show Collection | Trade Collection"
          description="a person who creates art (such as painting, sculpture, music, or writing) using
                    conscious skill and creative imagination. the great artists of the Renaissance.
                    an artist specializing in watercolors. : a person skilled in any of the arts."
          image="/images/homepage-role-artist.jpg"
        />
        <ThemesContentsHomepageV2OurRolesSection
          title="ARTIST"
          subtitle="Show Artwork | Sell Artwork | Manage Profile"
          description="a person who creates art (such as painting, sculpture, music, or writing)
                      using conscious skill and creative imagination. the great artists of the
                      Renaissance. an artist specializing in watercolors. : a person skilled in any
                      of the arts."
          image="/images/homepage-role-collector.jpg"
          textPosition="left"
        />
        <ThemesContentsHomepageV2OurRolesSection
          title="GALLERY"
          subtitle="Buy Artwork | Show Collection | Trade Collection"
          description="a person who creates art (such as painting, sculpture, music, or writing) using
                    conscious skill and creative imagination. the great artists of the Renaissance.
                    an artist specializing in watercolors. : a person skilled in any of the arts."
          image="/images/homepage-role-gallery.jpg"
        />
      </section>

      {/* //? ============== What We Offer Section ============= ?// */}
      <section className={s.offerSection}>
        <ThemesContentsHomepageV2WhatOfferSection dataList={offerList} />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Article Section ============= ?// */}
      <section>
        <ThemesContentsHomepageV2ArticleListSection dataList={articleListData} />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Testimonials Section ============= ?// */}
      <section>
        <ThemesContentsHomepageV2TestimonialSection />
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

ThemesContentsHomepageV2.propTypes = {
  artworkData: propTypes.array,
  artistData: propTypes.array,
};

export default ThemesContentsHomepageV2;
