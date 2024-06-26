// Libs
import { Col, Image, Row, Divider, Select } from "antd";
import { useEffect, useMemo, useState } from "react";

// Hooks
import { useGenres } from "dashboard/hooks/genre";

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

  return (
    <>
      <Col span={24} className={s.genre}>
        <Row className={s.container}>
          {/* //Todo: find better divider style */}

          <Col span={24} className={s.fullGenre}>
            <Select
              placeholder="Select Genre"
              className={s.select}
              onChange={handleSelectGenre}
              options={dataGenre?.map((item) => ({ label: item.title, value: item.id }))}
            />
            <Divider style={{ background: "#cbcbcb", margin: "10px 0px" }} />
            <Col>
              <h2 style={{ color: "#e5890a" }}>{selectedGenre?.title}</h2>
              <Col className={s.divider} />
              <p>
                {selectedGenre?.description?.length !== 0 ? (
                  selectedGenre?.description
                ) : (
                  <p style={{ color: "#cbcbcb" }}>No description</p>
                )}
              </p>
            </Col>

            <Row>
              {selectedGenre?.artwork?.length !== 0 ? (
                <Divider style={{ background: "#cbcbcb", margin: "10px 0px" }} />
              ) : (
                ""
              )}
              {selectedGenre?.artwork?.slice(0, 3).map((item, index) => {
                return (
                  <>
                    <Col key={index} className={s.imageContainer}>
                      <ThemesArtworkWithFrame
                        imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item.media_cover.url}`}
                        artworkTitle={item.title}
                        artworkSize={`${item.width} x ${item.height}`}
                        artworkSlug={`/artwork/${item.slug}`}
                        artworkStatus={item.status}
                      />
                    </Col>
                  </>
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
