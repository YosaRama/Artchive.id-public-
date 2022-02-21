// Libs
import { Affix, Col, Form, Input, Row } from "antd";

// Components
import PageContainerBox from "themes/components/container/box-container";
import ThemesArtistCard from "themes/components/libs/artist-card";
import ThemesBanner from "themes/components/libs/banner";
import ThemesButton from "themes/components/libs/button";

// Styles
import s from "./index.module.scss";

function ArtistListPage() {
  //? ============== Artist Hook ============= ?//
  const artistData = [
    { id: 1, name: "Yosa Rama", city: "Bali", slug: "yosa-rama-dinata" },
    { id: 1, name: "Yosa Rama", city: "Bali", slug: "yosa-rama-dinata" },
    { id: 1, name: "Yosa Rama", city: "Bali", slug: "yosa-rama-dinata" },
    { id: 1, name: "Yosa Rama", city: "Bali", slug: "yosa-rama-dinata" },
    { id: 1, name: "Yosa Rama", city: "Bali", slug: "yosa-rama-dinata" },
    { id: 1, name: "Yosa Rama", city: "Bali", slug: "yosa-rama-dinata" },
  ];
  // * ====================================== * //

  return (
    <>
      <section>
        <ThemesBanner imgSrc="/images/banner-artist-list.jpg" className={"page-bannerContainer"}>
          <div className={"page-bannerTitle"}>
            <h1>Our Artist</h1>
          </div>
        </ThemesBanner>
      </section>

      <Affix>
        <PageContainerBox sectionclass={s.searchSection}>
          <section className={s.searchContainer}>
            <Form>
              <Row gutter={[16, 0]}>
                <Col span={6}>
                  <Form.Item name={"city"}>
                    <Input placeholder="Search by City..." width={"100%"} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name={"genre"}>
                    <Input placeholder="Search by Genre..." width={"100%"} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name={"name"}>
                    <Input placeholder="Search by Name..." width={"100%"} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Row gutter={[16, 0]}>
                    <Col span={12}>
                      <ThemesButton type={`outlined ${s.button}`}>RESET</ThemesButton>
                    </Col>
                    <Col span={12}>
                      <ThemesButton type={`default ${s.button}`}>SEARCH</ThemesButton>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </section>
        </PageContainerBox>
      </Affix>

      <PageContainerBox>
        <section className={s.listSection}>
          <Row gutter={[16, 32]}>
            {artistData.map((item, index) => (
              <Col span={6} key={index}>
                <ThemesArtistCard
                  artistId={item.id}
                  artistSlug={item.slug}
                  artistName={item.name}
                  artistCity={item.city}
                  avatarSrc={item.avatar}
                  bannerSrc={item.artwork}
                />
              </Col>
            ))}
          </Row>
        </section>
      </PageContainerBox>
    </>
  );
}

export default ArtistListPage;
