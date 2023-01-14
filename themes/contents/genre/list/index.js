// Libs
import { Col, Row } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesBanner from "themes/components/libs/banner";
import ThemesGenreListCard from "themes/components/libs/genre-list-card";

// Styles
import s from "./index.module.scss";

function ThemesContentsGenreList() {
  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      {/* <ThemesBanner imgSrc="/images/banner-homepage.jpg" /> */}
      <section>
        <ThemesBanner imgSrc="/images/banner-homepage.jpg" className={"page-bannerContainer"}>
          <div className={"page-bannerTitle"}>
            <Col className={s.bannerTitle}>
              <h1 style={{ color: "white" }}>Artwork Genres</h1>
            </Col>
          </div>
        </ThemesBanner>
      </section>

      {/* // * ====================================== * // */}

      {/* //? ============== Genre Section ============= ?// */}
      <Col className={s.genreList}>
        <ThemesContainerMain>
          <Col className={s.container}>
            <h1 style={{ fontSize: "32px" }}>What is genre?</h1>
            <p>
              Genre painting (or petit genre), a form of genre art, depicts aspects of everyday life
              by portraying ordinary people engaged in common activities.[1] One common definition
              of a genre scene is that it shows figures to whom no identity can be attached either
              individually or collectively, thus distinguishing it from history paintings (also
              called grand genre) and portraits. A work would often be considered as a genre work
              even if it could be shown that the artist had used a known person—a member of his
              family, say—as a model. In this case it would depend on whether the work was likely to
              have been intended by the artist to be perceived as a portrait—sometimes a subjective
              question. The depictions can be realistic, imagined, or romanticized by the artist.
              Because of their familiar and frequently sentimental subject matter, genre paintings
              have often proven popular with the bourgeoisie, or middle class.
            </p>
          </Col>
          <Col>
            <h1 style={{ fontSize: "32px" }}>Get to know Genres in Artchive.id</h1>

            <ThemesGenreListCard />
          </Col>
        </ThemesContainerMain>
      </Col>
      {/* // * ====================================== * // */}
    </>
  );
}
export default ThemesContentsGenreList;
