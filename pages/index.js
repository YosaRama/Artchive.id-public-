// Contents
import ThemesContentsHomepageV2 from "themes/contents/homepage-v2";

function PageHomepage(props) {
  const { artistData, artworkData, curatorialPickData, articleData, exhibitionData } = props;
  return (
    <>
      <ThemesContentsHomepageV2
        artistData={artistData}
        artworkData={artworkData}
        curatorialPickData={curatorialPickData}
        articleData={articleData}
        exhibitionData={exhibitionData}
      />
    </>
  );
}

export default PageHomepage;

export async function getStaticProps(ctx) {
  //? ============== Queries ============= ?//
  const { GET_ARTWORK } = require("app/database/query/artwork");
  const { GET_USER } = require("app/database/query/user");
  const { GET_ARTICLES } = require("app/database/query/articles");
  const { GET_EXHIBITION } = require("app/database/query/exhibition");
  // * ====================================== * //

  //? ============== Artwork Data ============= ?//
  const artwork = await GET_ARTWORK({ limit: 6, client: "true" });
  const artworkData = artwork.map((item) => {
    return {
      id: item.id,
      slug: item.slug,
      title: item.title,
      size: `${item.width} x ${item.height}`,
      imgUrl: item?.media_cover
        ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`
        : null,
      status: item.status,
      isCuratorPick: item.curatorial_pick == 1 ? true : null,
    };
  });
  // * ====================================== * //

  //? ============== Curatorial Pick Data ============= ?//
  const curatorialPick = await GET_ARTWORK({ limit: 6, client: "true", isCuratorialPick: "true" });
  const curatorialPickData = curatorialPick.map((item) => {
    return {
      id: item.id,
      slug: item.slug,
      title: item.title,
      size: `${item.width} x ${item.height}`,
      imgUrl: item?.media_cover
        ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`
        : null,
      status: item.status,
      isCuratorPick: item.curatorial_pick == 1 ? true : null,
    };
  });
  // * ====================================== * //

  //? ============== Artist Data ============= ?//
  const artist = await GET_USER({ limit: 4, role: "ARTIST", client: "true" });
  const artistData = artist.map((item) => {
    return {
      id: item.id,
      slug: item.slug,
      name: item?.full_name,
      city: item?.city,
      avatar: item?.profile?.url ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.profile?.url}` : null,
      artwork: item?.banner?.url ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.banner?.url}` : null,
    };
  });
  // * ====================================== * //

  //? ============== Article Data ============= ?//
  const article = await GET_ARTICLES({ limit: 3 });
  const articleData = JSON.parse(JSON.stringify(article));
  // * ====================================== * //

  //? ============== Exhibition Data ============= ?//
  const exhibition = await GET_EXHIBITION({ limit: 3 });
  const exhibitionData = JSON.parse(JSON.stringify(exhibition));
  // * ====================================== * //

  return {
    props: {
      artistData: artistData,
      artworkData: artworkData,
      curatorialPickData: curatorialPickData,
      articleData: articleData,
      exhibitionData: exhibitionData,
    },
    revalidate: 10,
  };
}
