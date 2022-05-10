// Libs
import moment from "moment";

// Queries
import { GET_ALL_EXHIBITION_SLUG, GET_EXHIBITION_BY_SLUG } from "app/database/query/exhibition";

// Contents
import ThemesContentsExhibitionDetails from "themes/contents/exhibition/detail";

function PageExhibitionDetails(props) {
  const { exhibitionDetails } = props;
  return (
    <>
      <ThemesContentsExhibitionDetails exhibitionData={exhibitionDetails} />
    </>
  );
}

export default PageExhibitionDetails;

export const getStaticPaths = async () => {
  const allSlug = await GET_ALL_EXHIBITION_SLUG();

  return {
    paths: allSlug.map((item) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const exhibitionDataRes = await GET_EXHIBITION_BY_SLUG({ slug: slug });

  //? ============== Data Parse ============= ?//
  const exhibitionDetails = {
    ...exhibitionDataRes,
    start_date: moment(exhibitionDataRes.start_date).format(),
    end_date: moment(exhibitionDataRes.end_date).format(),
    artists: exhibitionDataRes.artists.map((item) => item.user),
    artworks: exhibitionDataRes.artworks.map((item) => item.artwork),
    created_at: null,
    updated_at: null,
  };
  // * ====================================== * //
  return {
    props: {
      exhibitionDetails: exhibitionDetails,
    },
    revalidate: 10,
  };
};
