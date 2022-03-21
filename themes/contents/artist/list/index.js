// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Affix, Col, Form, Input, Row, Select } from "antd";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtistCard from "themes/components/libs/artist-card";
import ThemesBanner from "themes/components/libs/banner";
import ThemesButton from "themes/components/libs/button";

// Data Hook
import { useUsersLoad } from "app/hooks/user";

// Styles
import s from "./index.module.scss";

function ThemesContentsArtistList(props) {
  const router = useRouter();
  const { fullName: queryFullName, genre: queryGenre, city: queryCity } = router?.query;
  const { initialArtistData } = props;

  //? ============== Handle Search ============= ?//
  const [searchForm] = Form.useForm();
  // Handle Search
  const handleSearch = () => {
    searchForm.validateFields().then(async (value) => {
      const submission = {
        fullName: value?.name ? value?.name : "",
        genre: value?.genre ? value?.genre : "",
        city: value?.city ? value?.city : "",
      };
      router.push(
        `/artist?fullName=${submission?.fullName}&genre=${submission?.genre}&city=${submission?.city}`
      );
    });
  };
  // =========================

  // Handle Reset Search
  const handleResetSearch = () => {
    searchForm.resetFields();
    router.push("/artist");
  };
  // =========================

  // * ====================================== * //

  //? ============== Artist Hook ============= ?//
  const limit = 8;
  const {
    data: artistData,
    size: artistSize,
    setSize: artistSetSize,
    end: artistEndLoad,
    loading: artistLoading,
  } = useUsersLoad({
    queryString: `role=ARTIST&client=true&fullName=${queryFullName ? queryFullName : ""}`,
    limit: limit,
  });
  // * ====================================== * //

  //? ============== Handle Load More ============= ?//
  const handleLoadMore = () => {
    artistSetSize(artistSize + 1);
  };
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

      <div className={s.mobileHidden}>
        <Affix>
          <ThemesContainerMain sectionclass={s.searchSection}>
            <section className={s.searchContainer}>
              <Form form={searchForm}>
                <Row gutter={[16, 0]}>
                  <Col span={6}>
                    <Form.Item name={"city"}>
                      <Input placeholder="Search by City..." width={"100%"} disabled />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item name={"genre"}>
                      <Input placeholder="Search by Genre..." width={"100%"} disabled />
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
                        <ThemesButton type={`outlined ${s.button}`} onClick={handleResetSearch}>
                          RESET
                        </ThemesButton>
                      </Col>
                      <Col span={12}>
                        <ThemesButton type={`default ${s.button}`} onClick={handleSearch}>
                          SEARCH
                        </ThemesButton>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </section>
          </ThemesContainerMain>
        </Affix>
      </div>

      <ThemesContainerMain>
        <section className={s.listSection}>
          <Row gutter={[16, 32]}>
            {(artistData ? artistData : initialArtistData)?.map((item, index) => (
              <Col
                xl={{ span: 6 }}
                lg={{ span: 8 }}
                md={{ span: 12 }}
                xs={{ span: 24 }}
                key={index}
              >
                <ThemesArtistCard
                  artistId={item.id}
                  artistSlug={item.slug}
                  artistName={item.full_name}
                  artistCity={item.city}
                  avatarSrc={
                    item?.profile && `${process.env.NEXT_PUBLIC_S3_URL}/${item?.profile?.url}`
                  }
                  bannerSrc={
                    item?.banner && `${process.env.NEXT_PUBLIC_S3_URL}/${item?.banner?.url}`
                  }
                />
              </Col>
            ))}
          </Row>
          {!artistEndLoad && (
            <Col span={24} className={s.loadButton}>
              <ThemesButton type={`default`} onClick={handleLoadMore} loading={artistLoading}>
                LOAD MORE
              </ThemesButton>
            </Col>
          )}
        </section>
      </ThemesContainerMain>
    </>
  );
}

ThemesContentsArtistList.propTypes = {
  initialArtistData: propTypes.array,
};

export default ThemesContentsArtistList;
