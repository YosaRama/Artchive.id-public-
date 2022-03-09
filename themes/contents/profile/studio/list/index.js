// Libs
import { v4 as uuid } from "uuid";
import propTypes from "prop-types";
import { Col, Divider, Row } from "antd";

// Components
import ThemesHeadline from "themes/components/libs/headline";
import ThemesButton from "themes/components/libs/button";
import ThemesProfileArtworkCard from "themes/components/libs/profile-artwork-card";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

// Styles
import s from "./index.module.scss";
import { useArtworksLoad } from "app/hooks/artwork";

function ThemesContentsProfileStudioList(props) {
  const { artistId } = props;

  //? ============== Artwork Hook ============= ?//
  const {
    size: artworkDataSize,
    setSize: artworkSetDataSize,
    data: artworkData,
    total: artworkTotal,
    loading: artworkLoading,
  } = useArtworksLoad({ limit: 8, queryString: `artistId=${artistId}` });
  // * ====================================== * //

  //? ============== Handle Load More ============= ?//
  const handleLoadMore = () => {
    artworkSetDataSize(artworkDataSize + 1);
  };
  // * ====================================== * //

  return (
    <>
      <div className={s.title}>
        <ThemesHeadline title="Your Artwork" subtitle={`You have ${artworkTotal} of artwork`} />
      </div>
      <Divider className={s.divider} />
      <Col
        xl={{ span: 22 }}
        xs={{ span: 24 }}
        className={s.contentContainer}
        style={artworkData?.length == artworkTotal && { marginBottom: 50 }}
      >
        <Row gutter={[16, 16]}>
          {artworkData &&
            artworkData.map((item) => {
              return (
                <Col
                  xl={{ span: 6 }}
                  lg={{ span: 8 }}
                  md={{ span: 12 }}
                  xs={{ span: 24 }}
                  key={uuid()}
                >
                  <ThemesProfileArtworkCard
                    approved={item.approve}
                    status={item.status}
                    id={item.id}
                    imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item.media_cover.url}`}
                    title={item.title}
                    price={priceFormatter(item.price, ",")}
                  />
                </Col>
              );
            })}
        </Row>
        {artworkData?.length != artworkTotal && (
          <Col className={s.btnContainer}>
            <ThemesButton onClick={handleLoadMore} loading={artworkLoading}>
              LOAD MORE
            </ThemesButton>
          </Col>
        )}
      </Col>
    </>
  );
}

ThemesContentsProfileStudioList.propTypes = {
  artistId: propTypes.number,
};

export default ThemesContentsProfileStudioList;
