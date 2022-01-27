// Libs
import { Affix, Card, Col, Form, Input, Row, Select, Slider } from "antd";
import { useState } from "react";
const { Option } = Select;

// Components
import PageContainerBox from "themes/components/container/box-container";
import MasonryContainer from "themes/components/container/masonry-container";
import PageArtworkCardList from "themes/components/libs/page-artwork-card";
import PageBanner from "themes/components/libs/page-banner";
import PageButton from "themes/components/libs/page-button";

// Styles
import s from "./index.module.scss";

function ArtworkListPage() {
  //? ============== Handle Price Search ============= ?//
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [minPrice, setMinPrice] = useState(1000000);
  const handlePriceChange = (value) => {
    setMaxPrice(value[1]);
    setMinPrice(value[0]);
  };
  // * ====================================== * //

  return (
    <>
      <section>
        <PageBanner imgSrc="/images/banner-artwork-list.jpg" className={s.bannerContainer}>
          <div className={s.bannerTitle}>
            <h1>Artwork List</h1>
          </div>
        </PageBanner>
      </section>

      <PageContainerBox>
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
                      <PageButton type={"default " + s.searchButton}>SEARCH</PageButton>
                    </Col>
                  </Col>
                </Card>
              </Affix>
            </Col>

            <Col span={17}>
              <MasonryContainer breakPoint={3}>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-1.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-2.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-3.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-4.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-5.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-6.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-1.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-2.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-3.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-4.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-5.jpg" />
                </Col>
                <Col span={24}>
                  <PageArtworkCardList imgSrc="/images/artwork-6.jpg" />
                </Col>
              </MasonryContainer>
            </Col>
          </Row>
        </section>
      </PageContainerBox>
    </>
  );
}

export default ArtworkListPage;
