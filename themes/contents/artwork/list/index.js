// Libs
import { Affix, Card, Col, Form, Input, Row, Select, Slider } from "antd";
import { useState } from "react";
const { Option } = Select;

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesArtworkCard from "themes/components/libs/artwork-card";
import ThemesBanner from "themes/components/libs/banner";
import ThemesButton from "themes/components/libs/button";

// Data Hook
import { useArtworksLoad } from "app/hooks/artwork";

// Styles
import s from "./index.module.scss";

function ThemesContentsArtworkList() {
  //? ============== Artwork Hook ============= ?//
  const {
    data: artworkData,
    size,
    setSize,
    end,
  } = useArtworksLoad({ limit: 15, queryString: "client=true" });
  // * ====================================== * //
  //? ============== Handle Price Search ============= ?//
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [minPrice, setMinPrice] = useState(1000000);
  const handlePriceChange = (value) => {
    setMaxPrice(value[1]);
    setMinPrice(value[0]);
  };
  // * ====================================== * //

  //? ============== Handle Load More ============= ?//
  const handleLoadMore = () => {
    setSize(size + 1);
  };
  // * ====================================== * //

  return (
    <>
      <section>
        <ThemesBanner imgSrc="/images/banner-artwork-list.jpg" className={"page-bannerContainer"}>
          <div className={"page-bannerTitle"}>
            <h1>Artwork List</h1>
          </div>
        </ThemesBanner>
      </section>

      <ThemesContainerMain>
        <section style={{ margin: "50px 0" }}>
          <Row justify="space-between">
            <Col span={6}>
              <Affix offsetTop={25}>
                <Card>
                  <Col span={24} className={s.searchTitle}>
                    <h1>Search By</h1>
                  </Col>
                  <Col span={24}>
                    <Form>
                      <Form.Item name="artist_name">
                        <Select showSearch placeholder="Artist Name">
                          <Option value={["john doe", 1]}>John Doe</Option>
                          <Option value={["mark sue", 2]}>Mark Sue</Option>
                          <Option value={["marcus hitler", 3]}>Marcus Hitler</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item name="artwork_title">
                        <Input placeholder="Artwork Title" />
                      </Form.Item>
                      <Form.Item>
                        <Select showSearch placeholder="Genre">
                          <Option value={["abstract", 1]}>Abstract</Option>
                          <Option value={["cubism", 2]}>Cubism</Option>
                          <Option value={["realism", 3]}>Realism</Option>
                        </Select>
                      </Form.Item>
                      <Col span={24} className={s.priceTitle}>
                        <p>Price</p>
                      </Col>
                      <Row justify="space-between">
                        <Col className={s.priceTag}>IDR {minPrice}</Col>
                        <Col className={s.priceTag}>IDR {maxPrice}</Col>
                      </Row>
                      <Form.Item>
                        <Slider
                          range
                          defaultValue={[minPrice, maxPrice]}
                          max={100000000}
                          min={1000000}
                          step={1000000}
                          onChange={handlePriceChange}
                        />
                      </Form.Item>
                    </Form>
                    <Col span={24}>
                      <ThemesButton type={"default " + s.searchButton}>SEARCH</ThemesButton>
                    </Col>
                  </Col>
                </Card>
              </Affix>
            </Col>

            <Col span={17}>
              <ThemesContainerMasonry breakPoint={3}>
                {artworkData?.map((item) => {
                  return (
                    <Col span={24} key={item?.id}>
                      <ThemesArtworkCard
                        artworkSlug={item?.slug}
                        artworkTitle={item?.title}
                        artistName={item?.artist?.full_name}
                        artistCity={item?.artist?.city}
                        artworkYear={item?.year}
                        artworkWidth={item?.width}
                        artworkHeight={item?.height}
                        artworkPrice={item?.price}
                        artworkMedia={item?.material}
                        artworkStatus={item?.status}
                        imgSrc={
                          item?.media_cover
                            ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`
                            : "/images/default-images.jpg"
                        }
                      />
                    </Col>
                  );
                })}
              </ThemesContainerMasonry>
              {!end && (
                <Col span={24} style={{ textAlign: "center" }}>
                  <ThemesButton onClick={handleLoadMore}>Load More</ThemesButton>
                </Col>
              )}
            </Col>
          </Row>
        </section>
      </ThemesContainerMain>
    </>
  );
}

export default ThemesContentsArtworkList;