// Libs
import { useRouter } from "next/router";
import Sticky from "react-sticky-el";
import { Card, Col, Form, Input, Row, Select, Slider } from "antd";
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
import { useUsers } from "app/hooks/user";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesContentsArtworkList() {
  const router = useRouter();
  const { artistName } = router.query;

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
        genre: values.genre,
        artworkTitle: values.artwork_title,
      };
      router.push(`/artwork?artistName=${submission.artistName}`);
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
    queryString: `client=true&artistName=${artistName ? artistName : ""}`,
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

      <section className="">
        <ThemesContainerMain containerClass="">
          <section style={{ margin: "50px 0" }} className="">
            <Row justify="space-between" className="boundary">
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
                            <Select showSearch placeholder="Genre" disabled>
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

              <Col xl={{ span: 17 }} lg={{ span: 24 }}>
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
                    <ThemesButton onClick={handleLoadMore} loading={artworkLoading}>
                      Load More
                    </ThemesButton>
                  </Col>
                )}
              </Col>
            </Row>
          </section>
        </ThemesContainerMain>
      </section>
    </>
  );
}

export default ThemesContentsArtworkList;
