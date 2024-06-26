/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row } from "antd";

// Contents
import ThemesContentsArtworkDetailsInformation from "./information";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesArtworkWithFrame from "themes/components/libs/artwork-with-frame";
import ThemesDividerWithButton from "themes/components/libs/divider-with-button";
import ThemesHeadline from "themes/components/libs/headline";

// Data Hook
import { useArtworks } from "dashboard/hooks/artwork";

// Styles
import s from "./index.module.scss";

function ThemesContentsArtworkDetails(props) {
  const { artworkData } = props;
  const router = useRouter();

  //? ============== Other Artwork Hook ============= ?//
  const { data: otherArtworkData } = useArtworks({
    queryString: `excludeSlug=${artworkData?.slug}&artistId=${artworkData?.artist_id}&client=true&limit=4`,
  });
  // * ====================================== * //

  //? ============== Might Like Artwork Hook ============= ?//
  const genreListData = artworkData?.genre.map((item) => item.id);
  const genreList = genreListData?.join(",");
  const { data: mightLikeData } = useArtworks({
    queryString: `excludeSlug=${artworkData?.slug}&excludeArtist=${artworkData?.artist_id}&genreId=${genreList}&client=true&limit=4`,
  });
  // * ====================================== * //

  return (
    <>
      <section style={{ margin: "50px 0" }}>
        <ThemesContainerMain>
          <ThemesContentsArtworkDetailsInformation artworkData={artworkData} />

          {otherArtworkData?.length != 0 && (
            <section style={{ margin: "100px 0" }}>
              <ThemesHeadline
                title={`Other artwork`}
                subtitle={`${artworkData?.artist?.full_name}`}
                className={s.sectionTitle}
              />
              <Row gutter={[16, 0]} className={s.otherSection}>
                {otherArtworkData?.map((item) => {
                  return (
                    <Col
                      xl={{ span: 6 }}
                      lg={{ span: 7 }}
                      md={{ span: 11 }}
                      xs={{ span: 19 }}
                      key={item.id}
                    >
                      <ThemesArtworkWithFrame
                        imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`}
                        artworkStatus={item.status}
                        artworkTitle={item.title}
                        artworkSize={`${item.width} x ${item.height}`}
                        artworkSlug={`/artwork/${item.slug}`}
                      />
                    </Col>
                  );
                })}
              </Row>
              <ThemesDividerWithButton
                onClick={() =>
                  router.push(
                    `/artwork?artistName=${encodeURIComponent(artworkData?.artist?.full_name)}`
                  )
                }
              >
                SEE MORE
              </ThemesDividerWithButton>
            </section>
          )}

          {mightLikeData?.length != 0 && (
            <section style={{ margin: "100px 0" }}>
              <ThemesHeadline title="You Might Also Like" className={s.sectionTitle} />
              <Row gutter={[16, 0]} className={s.otherSection}>
                {mightLikeData?.map((item) => {
                  return (
                    <Col
                      xl={{ span: 6 }}
                      lg={{ span: 7 }}
                      md={{ span: 11 }}
                      xs={{ span: 19 }}
                      key={item.id}
                    >
                      <ThemesArtworkWithFrame
                        imgSrc={`${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`}
                        artworkStatus={item.status}
                        artworkTitle={item.title}
                        artworkSize={`${item.width} x ${item.height}`}
                        artworkSlug={`/artwork/${item.slug}`}
                      />
                    </Col>
                  );
                })}
              </Row>
              <ThemesDividerWithButton>SEE MORE</ThemesDividerWithButton>
            </section>
          )}
        </ThemesContainerMain>
      </section>
    </>
  );
}

ThemesContentsArtworkDetails.propTypes = {
  artworkData: propTypes.object,
};

export default ThemesContentsArtworkDetails;
