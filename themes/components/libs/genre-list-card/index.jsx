// Libs
import { Col, Image, Row, Divider } from "antd";
import { useEffect, useMemo, useState } from "react";

// Hooks
import { useGenres } from "app/hooks/genre";

// Styles
import s from "./index.module.scss";
import ThemesArtworkWithFrame from "../artwork-with-frame";

function ThemesGenreListCard() {
  const { data: dataGenre } = useGenres({ queryString: "" });
  //? ============== Genre Show Handler ============= ?//
  const [selectedGenre, setSelectedGenre] = useState();

  const handleSelectGenre = (id) => {
    setSelectedGenre(dataGenre?.find((item) => item.id === id));
  };
  useEffect(() => {
    setSelectedGenre(dataGenre && dataGenre[0]);
  }, [dataGenre]);
  // * ====================================== * //
  // console.log("Test Genre", dataGenre);
  // console.log("Select Genre", selectedGenre.artwork);
  return (
    <>
      <Col span={24} className={s.genre}>
        <Row className={s.container}>
          <Col span={4} className={s.genreList}>
            <h2>Select Genre</h2>
            {dataGenre?.map((item, index) => {
              return (
                <Col
                  key={index}
                  span={24}
                  className={
                    `${s.description}` + " " + `${item.id == selectedGenre?.id ? s.active : ""}`
                  }
                  onClick={() => handleSelectGenre(item.id)}
                >
                  <Col className={`${item.id == selectedGenre?.id ? s.activeSelected : ""}`} />
                  <p>{item.title}</p>
                </Col>
              );
            })}
          </Col>
          {/* <Divider type="vertical" className={s.divider} /> */}

          {/* //Todo: find better divider style */}

          <Col span={18} className={s.fullGenre}>
            <Col>
              <h1 style={{ fontSize: "32px" }}>{selectedGenre?.title}</h1>
              <p>{selectedGenre?.description}</p>
            </Col>
            {selectedGenre?.artwork?.length !== 0 ? (
              <Col>
                <h1 style={{ fontSize: "32px" }}>
                  Artworks with <span style={{ color: "#e5890a" }}>{selectedGenre?.title}</span>{" "}
                  genre in Artchive.id
                </h1>
              </Col>
            ) : (
              ""
            )}

            <Row gutter={[40, 40]}>
              {selectedGenre?.artwork?.slice(0, 2).map((item, index) => {
                return (
                  <Col key={index} className={s.imageContainer}>
                    <ThemesArtworkWithFrame
                      imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item.media_cover.url}`}
                      artworkTitle={item.title}
                      artworkSize={`${item.width} x ${item.height}`}
                      artworkSlug={`/artwork/${item.slug}`}
                      artworkStatus={item.status}
                    />
                    {/* <Image
                      src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.media_cover.url}`}
                      alt=""
                      preview={false}
                    /> */}
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default ThemesGenreListCard;
