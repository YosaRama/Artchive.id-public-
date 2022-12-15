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
import { ArtistManagementIcon } from "public/icons/artist-management-icon";
import { GalleryManagementIcon } from "public/icons/gallery-management-icon";
import { ArchiveManagementIcon } from "public/icons/archive-management-icon";
import { CollectorManagementIcon } from "public/icons/collector-management-icon";

function ThemesContentsHomepageV2(props) {
  const { artworkData, artistData } = props;
  const { width } = useWindowSize();
  //? ============== Articles Hooks ============= ?//
  const { data: articleListData, total: articleListDataTotal } = useArticlesLoad({ limit: 3 });
  // * ====================================== * //

  const offerList = [
    {
      icon: <ArtistManagementIcon />,
      offer: "Artist Management",
      description:
        "We let you manage your own profile and show the world your artworks. Hey, Collector could buy artwork from you!",
    },
    {
      icon: <CollectorManagementIcon />,
      offer: "Collector Management",
      description:
        "We let you collect artworks from our artist, trade your collection with othercollectors, and you can show it on your profile!",
    },
    {
      icon: <GalleryManagementIcon />,
      offer: "Gallery Management",
      description:
        "Gallery is a wonderful place to exhibit paintings. We have got you a landing pagethat matches your gallery themes!",
    },
    {
      icon: <ArchiveManagementIcon />,
      offer: "Archive Artworks",
      description:
        "We gonna archive all of your artworks so the existence of your artwork would neverwent missing!",
    },
  ];

  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      <section>
        <ThemesContentsHomepageV2BannerSection />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Curators Artwork Section ============= ?// */}
      <section className={s.artworkContainer}>
        <ThemesContentsHomepageV2ArtworkArtistSection
          listData={artworkData}
          title={
            width > 500
              ? `<h1>The best <span>Artworks</span> you ever see!</h1>`
              : `<h1>Exclusive <span>Artworks</span></h1>`
          }
          description={
            width > 500
              ? "Artworks recommendations for you exclusively selected from our Curators! Find out more about the best artowork only on Artchive.id"
              : "Artworks recommendations for you exclusively selected from our Curators!"
          }
          buttonText="SEE MORE"
          buttonTextMobile="SEE MORE"
          listDataType="artwork"
          textPosition="left"
          textPositionOnMobile="top"
          page="/artwork"
        />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== New Artwork Section ============= ?// */}
      <section>
        <ThemesContentsHomepageV2ArtworkArtistSection
          listData={artworkData}
          title={
            width > 500
              ? `<h1>The latest <span>Artworks</span> from our artists!</h1>`
              : `<h1>Latest<span> Artworks</span></h1>`
          }
          description={
            width > 500
              ? "We help artist to show their artworks and also help collectors to find the best artwork they need! Find out more about our artist latest artwork and pocket it!"
              : "We help artist to show their artworks and also help collectors to find the best artwork they need!"
          }
          buttonText="SEE MORE"
          buttonTextMobile="SEE MORE"
          listDataType="artwork"
          textPosition="right"
          textPositionOnMobile="top"
          page="/artwork"
        />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Artist Sections ============= ?// */}

      <section className={s.artistContainer}>
        {/* //TODO : Change Text Position To Right if New Artwork Section System not yet ready// */}
        <ThemesContentsHomepageV2ArtworkArtistSection
          listData={artistData}
          title={
            width > 500
              ? `<h1>Our New <span>Artists</span> with Stunning Talent!</h1>`
              : `<h1>Our New <span>Artists</span>!</h1>`
          }
          description={
            "The artist is not a different kind of person, but every person is a different kind of artist."
          }
          buttonText="DISCOVER MORE"
          buttonTextMobile="SEE MORE"
          listDataType="artist"
          textPosition="left"
          textPositionOnMobile="top"
          page="/artist"
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
          title="ARTIST"
          subtitle="Show Artwork | Sell Artwork | Manage Profile"
          description="An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art. The common usage in both everyday speech and academic discourse refers to a practitioner in the visual arts only."
          image="/images/homepage-role-artist.jpg"
        />
        <ThemesContentsHomepageV2OurRolesSection
          title="ART COLLECTOR"
          subtitle="Buy Artwork | Show Collection | Trade Collection"
          description="Art connoiseur. Art dealer. Art enthusiast. Art lover. “A famous art collector is walking through the city when he notices a mangy cat lapping milk from a saucer in the doorway of a store, and he does a double take”."
          image="/images/homepage-role-collector.jpg"
          textPosition="left"
        />

        <ThemesContentsHomepageV2OurRolesSection
          title="GALLERY"
          subtitle="Show Gallery Artwork | Do Artwork Transaction"
          description="An art gallery is an exhibition space to display and sell artworks. As a result, the art gallery is a commercial enterprise working with a portfolio of artists."
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
