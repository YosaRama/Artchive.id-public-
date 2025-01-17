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
import ThemesContentsHomepageV2FaqSection from "./faq-section";

// Helpers
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Dummy
import { roleSection, offerList, faqList } from "dashboard/database/dummy/homepage-v2";

function ThemesContentsHomepageV2(props) {
  const { artworkData, artistData, curatorialPickData, articleData, exhibitionData } = props;
  const { width } = useWindowSize();

  const isNotReadyToShow = true; //TODO : Remove when everything is ready to show//

  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      <section>
        <ThemesContentsHomepageV2BannerSection />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Curators Artwork Section ============= ?// */}
      {curatorialPickData?.length >= 3 ? (
        <section className={s.curatorPickContainer}>
          <ThemesContentsHomepageV2ArtworkArtistSection
            listData={curatorialPickData}
            title={
              width > 768
                ? `<h1>The best <span>Artworks</span> picked by our Curators!</h1>`
                : `<h1><span>Curator's Pick</span></h1>`
            }
            description={
              width > 500
                ? "Artworks recommendations for you exclusively selected from our Curators! Find out more about the best artwork only on Artchive.id"
                : "Artworks recommendations for you exclusively selected from our Curators!"
            }
            buttonText="CURATORS PICK ARTWORK"
            buttonTextMobile="SEE MORE"
            listDataType="artwork"
            textPosition="left"
            textPositionOnMobile="top"
            page="/artwork"
          />
        </section>
      ) : null}
      {/* // * ====================================== * // */}

      {/* //? ============== New Artwork Section ============= ?// */}
      <section className={s.artworkContainer}>
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
          buttonText="SEE MORE ARTWORK"
          buttonTextMobile="SEE MORE"
          listDataType="artwork"
          textPosition={curatorialPickData.length >= 3 ? "right" : "left"}
          textPositionOnMobile="top"
          page="/artwork"
        />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Artist Sections ============= ?// */}
      <section className={s.artistContainer}>
        <ThemesContentsHomepageV2ArtworkArtistSection
          listData={artistData}
          title={
            width > 500
              ? `<h1>New <span>Artists</span> with Stunning Talent!</h1>`
              : `<h1>New <span>Artists</span>!</h1>`
          }
          description={
            width > 500
              ? "The artist is not a different kind of person, but every person is a different kind of artist. Discover more new artist with outstanding talent!"
              : "Discover more new artist with outstanding talent!"
          }
          buttonText="DISCOVER MORE ARTIST"
          buttonTextMobile="SEE MORE"
          listDataType="artist"
          textPosition={curatorialPickData.length >= 3 ? "left" : "right"}
          textPositionOnMobile="top"
          page="/artist"
        />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Exhibition List ============= ?// */}
      {exhibitionData?.length !== 0 ? (
        <section>
          <ThemesContentsHomepageV2ExhibitionListSection dataExhibition={exhibitionData} />
        </section>
      ) : (
        ""
      )}

      {/* // * ====================================== * // */}

      {/* //? ============== Our Roles ============= ?// */}
      <section className={s.roleContainer}>
        <ThemesHeadline
          title="Your Roles"
          subtitle="Artchive.id platform divided into several roles"
          className={s.pageTitle}
        />
        {roleSection.map((item, index) => {
          return (
            <ThemesContentsHomepageV2OurRolesSection
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              image={item.image}
              textPosition={item.textPosition}
            />
          );
        })}
      </section>

      {/* //? ============== Article Section ============= ?// */}
      {articleData.length !== 0 ? (
        <section>
          <ThemesContentsHomepageV2ArticleListSection dataList={articleData} />
        </section>
      ) : (
        ""
      )}

      {/* // * ====================================== * // */}

      {/* //? ============== What We Offer Section ============= ?// */}
      <section>
        <ThemesContentsHomepageV2WhatOfferSection dataList={offerList} />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Frequently Asked Question Section ============= ?// */}
      <section className={s.faq}>
        <ThemesContentsHomepageV2FaqSection />
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Testimonials Section ============= ?// */}
      {isNotReadyToShow ? (
        ""
      ) : (
        <section>
          <ThemesContentsHomepageV2TestimonialSection />
        </section>
      )}
      {/* // * ====================================== * // */}
    </>
  );
}

ThemesContentsHomepageV2.propTypes = {
  artworkData: propTypes.array,
  artistData: propTypes.array,
  curatorialPickData: propTypes.array,
  articleData: propTypes.array,
  exhibitionData: propTypes.array,
};

export default ThemesContentsHomepageV2;
