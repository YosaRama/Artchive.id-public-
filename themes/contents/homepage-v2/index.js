// Libs
import propTypes from "prop-types";

// Components
import ThemesHeadline from "themes/components/libs/headline";

// Contents
import ThemesContentsHomepageV2BannerSection from "./banner-section";
import ThemesContentsHomepageV2ArtworkArtistSection from "./artwork-artist-section";
import ThemesContentsHomepageV2ExhibitionListSection from "./exhibition-list-section";
import ThemesContentsHomepageV2OurRolesSection from "./our-roles-section";
import ThemesContentsHomepageV2WhatOfferSection from "./what-offer-section";
import ThemesContentsHomepageV2ArticleListSection from "./article-list-section";
import ThemesContentsHomepageV2TestimonialSection from "./testimonial-section";

// Data Hook
import { useArticlesLoad } from "app/hooks/articles";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import { BookOutlined } from "@ant-design/icons";

function ThemesContentsHomepageV2(props) {
  const { artworkData, artistData } = props;
  const { width } = useWindowSize();
  //? ============== Articles Hooks ============= ?//
  const { data: articleListData, total: articleListDataTotal } = useArticlesLoad({ limit: 3 });
  // * ====================================== * //

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
        {width > 500 ? (
          <ThemesContentsHomepageV2ArtworkArtistSection
            listData={artworkData}
            title={`<h1>The best <span>Artworks</span> you ever see!</h1>`}
            description={
              "We help artist to show their artworks and also help collectors to find the best fit artwork they need! Find out more about our artist latest artwork and pocket it!"
            }
            buttonText="DISCOVER MORE"
            listDataType="artwork"
            textPosition="left"
            textPositionOnMobile="top"
            page="/artwork"
          />
        ) : (
          <ThemesContentsHomepageV2ArtworkArtistSection
            listData={artworkData}
            title={`<h1><span>Artworks</span></h1>`}
            description={"The best artworks you need!"}
            buttonText="DISCOVER MORE"
            listDataType="artwork"
            textPositionOnMobile="top"
            page="/artwork"
          />
        )}
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Artist Sections ============= ?// */}
      <section className={s.artistContainer}>
        {width > 500 ? (
          <ThemesContentsHomepageV2ArtworkArtistSection
            listData={artistData}
            title={`<h1>Our New <span>Artists</span> with Stunning Talent!</h1>`}
            description={
              "The artist is not a different kind of person, but every person is a different kind of artist."
            }
            buttonText="DISCOVER MORE"
            listDataType="artist"
            textPosition="right"
            textPositionOnMobile="top"
            page="/artist"
          />
        ) : (
          <ThemesContentsHomepageV2ArtworkArtistSection
            listData={artistData}
            title={`<h1>Our New <span>Artists</span>!</h1>`}
            description={
              "The artist is not a different kind of person, but every person is a different kind of artist."
            }
            buttonText="DISCOVER MORE"
            listDataType="artist"
            textPositionOnMobile="top"
            page="/artist"
          />
        )}
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
          title="ARTIST"
          subtitle="Show Artwork | Sell Artwork | Manage Profile"
          description="a person who creates art (such as painting, sculpture, music, or writing)
                      using conscious skill and creative imagination. the great artists of the
                      Renaissance. an artist specializing in watercolors. : a person skilled in any
                      of the arts."
          image="/images/homepage-role-artist.jpg"
        />
        <ThemesContentsHomepageV2OurRolesSection
          title="ART COLLECTOR"
          subtitle="Buy Artwork | Show Collection | Trade Collection"
          description="a person who creates art (such as painting, sculpture, music, or writing) using
                    conscious skill and creative imagination. the great artists of the Renaissance.
                    an artist specializing in watercolors. : a person skilled in any of the arts."
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
