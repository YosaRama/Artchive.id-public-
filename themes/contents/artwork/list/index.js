// Libs
import { useRouter } from "next/router";
import Sticky from "react-sticky-el";
import { Card, Col, Empty, Form, Input, Row, Select, Slider, Spin } from "antd";
import { useState } from "react";
const { Option } = Select;

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesContainerMasonry from "themes/components/container/masonry";
import ThemesArtworkCard from "themes/components/libs/artwork-card";
import ThemesBanner from "themes/components/libs/banner";
import ThemesButton from "themes/components/libs/button";
import ThemesNoData from "themes/components/libs/no-data";

// Data Hook
import { useArtworksLoad } from "app/hooks/artwork";
import { useUsers } from "app/hooks/user";
import { useGenres } from "app/hooks/genre";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsArtworkList() {
  const router = useRouter();
  const { artistName, genreId } = router.query;

  //? ============== Handle Get Viewport ============= ?//
  const viewport = useWindowSize();
  // * ====================================== * //

  //? ============== Handle Price Search ============= ?//
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [minPrice, setMinPrice] = useState(1000000);
  const handlePriceChange = (value) => {
    setMaxPrice(value[1]);
    setMinPrice(value[0]);
  };
  // * ====================================== * //

  //? ============== Handle Search ============= ?//
  const [searchForm] = Form.useForm();
  const handleSearch = () => {
    searchForm.validateFields().then((values) => {
      const submission = {
        artistName: values?.artist_name ? values?.artist_name : "",
        genre: values.genre ? values.genre : "",
        artworkTitle: values.artwork_title,
      };
      router.push(`/artwork?artistName=${submission.artistName}&genreId=${submission.genre}`);
    });
  };
  // * ====================================== * //

  //? ============== Artwork Hook ============= ?//
  const artworkLimit = 15;
  const {
    data: artworkData,
    size,
    setSize,
    end,
    loading: artworkLoading,
  } = useArtworksLoad({
    limit: artworkLimit,
    queryString: `client=true&artistName=${artistName ? artistName : ""}&genreId=${
      genreId ? genreId : ""
    }`,
  });
  // * ====================================== * //

  //? ============== Artist Hook ============= ?//
  const [searchName, setSearchName] = useState("");
  const { data: artistData } = useUsers({
    queryString: `role=ARTIST&fullName=${searchName}&limit=5&client=true`,
  });
  const handleSearchName = (value) => {
    setSearchName(value);
  };
  // * ====================================== * //

  //? ============== Genre Hook ============= ?//
  const { data: genreData } = useGenres({ queryString: "limit=all" });
  // * ====================================== * //

  //? ============== Handle Load More ============= ?//
  const handleLoadMore = () => {
    setSize(size + 1);
  };
  // * ====================================== * //

  return (
    <>
      {/* //? ============== Banner Section ============= ?// */}
      <section>
        <ThemesBanner
          imgSrc={
            !!artistName && artworkData.length != 0
              ? `${process.env.NEXT_PUBLIC_S3_URL}/${artworkData?.[0]?.media_cover?.url}`
              : "/images/banner-artwork-list.jpg"
          }
          className={"page-bannerContainer"}
        >
          <div className={"page-bannerTitle"}>
            <Col className={s.bannerTitle}>
              <h1>{!!artistName ? artistName : "Artwork List"}</h1>
            </Col>
          </div>
        </ThemesBanner>
      </section>
      {/* // * ====================================== * // */}

      {/* //? ============== Main Content ============= ?// */}
      <section className="">
        <ThemesContainerMain containerClass="">
          <section style={{ margin: "50px 0" }} className="">
            <Row justify="space-between" className="boundary">
              {/* //? ============== Desktop Search Section ============= ?// */}
              <Col span={6} className={`${s.mobileHidden} `} style={{ height: "auto" }}>
                <div className="affixContainer">
                  <Sticky
                    boundaryElement=".boundary"
                    hideOnBoundaryHit={false}
                    stickyStyle={{ paddingTop: 80 }}
                  >
                    <Card>
                      <Col span={24} className={s.searchTitle}>
                        <h1>Search By</h1>
                      </Col>
                      <Col span={24}>
                        <Form form={searchForm}>
                          <Form.Item name="artist_name">
                            <Select
                              showSearch
                              placeholder="Artist Name"
                              onSearch={handleSearchName}
                              allowClear
                            >
                              {artistData?.map((item, index) => {
                                return (
                                  <Option value={item.full_name} key={index}>
                                    {item.full_name}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                          <Form.Item name="artwork_title">
                            <Input placeholder="Artwork Title" disabled />
                          </Form.Item>
                          <Form.Item name={"genre"}>
                            <Select
                              showSearch
                              placeholder="Genre"
                              allowClear
                              filterOption={(input, option) =>
                                option.children
                                  .toString()
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0 ||
                                option.value
                                  .toString()
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {genreData?.map((item, index) => {
                                return (
                                  <Option key={index} value={item.id}>
                                    {item.title}
                                  </Option>
                                );
                              })}
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
                              disabled
                            />
                          </Form.Item>
                        </Form>
                        <Col span={24}>
                          <ThemesButton type={"default " + s.searchButton} onClick={handleSearch}>
                            SEARCH
                          </ThemesButton>
                        </Col>
                      </Col>
                    </Card>
                  </Sticky>
                </div>
              </Col>
              {/* // * ====================================== * // */}
              {/* //? ============== Artwork List Section ============= ?// */}
              <Col xl={{ span: 17 }} lg={{ span: 24 }}>
                {artworkData?.length !== 0 && (
                  <Spin spinning={artworkLoading}>
                    <ThemesContainerMasonry
                      breakPoint={
                        viewport?.width > 768
                          ? 3
                          : viewport?.width <= 768 && viewport?.width > 500
                          ? 2
                          : 1
                      }
                    >
                      {artworkData?.map((item) => {
                        return (
                          <Col span={24} key={item?.id}>
                            <ThemesArtworkCard
                              artworkUrl={`/artwork/${item?.slug}`}
                              artworkTitle={item?.title}
                              artistName={item?.artist?.full_name}
                              artistCity={item?.artist?.city}
                              artworkYear={item?.year}
                              artworkWidth={item?.width}
                              artworkHeight={item?.height}
                              artworkPrice={item?.markup_price}
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
                  </Spin>
                )}

                {artworkData?.length == 0 && <ThemesNoData />}

                {!end && (
                  <Col span={24} style={{ textAlign: "center" }}>
                    <ThemesButton onClick={handleLoadMore} loading={artworkLoading}>
                      LOAD MORE
                    </ThemesButton>
                  </Col>
                )}
              </Col>
              {/* // * ====================================== * // */}
            </Row>
          </section>
        </ThemesContainerMain>
      </section>
      {/* // * ====================================== * // */}
    </>
  );
}

export default ThemesContentsArtworkList;
