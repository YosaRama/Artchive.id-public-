// Contents
import Homepage from "themes/contents/homepage";

function PageHomepage(props) {
  const { artistData, artworkData } = props;
  return (
    <>
      <Homepage artistData={artistData} artworkData={artworkData} />
    </>
  );
}

export default PageHomepage;

export async function getStaticProps(ctx) {
  //? ============== Queries ============= ?//
  const { GET_ARTWORK } = require("app/database/query/artwork");
  const { GET_USER } = require("app/database/query/user");
  // * ====================================== * //

  //? ============== Artwork Data ============= ?//
  const artwork = await GET_ARTWORK({ limit: 4, client: "true" });
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
    };
  });
  // * ====================================== * //

  //? ============== Artist Data ============= ?//
  const artist = await GET_USER({ limit: 4, role: "ARTIST" });
  const artistData = artist.map((item) => {
    return {
      id: item.id,
      name: item?.full_name,
      city: item?.city,
      avatar: item?.profile?.url ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.profile?.url}` : null,
      artwork: item?.banner?.url ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.banner?.url}` : null,
    };
  });
  // * ====================================== * //

  return {
    props: {
      artistData: artistData,
      artworkData: artworkData,
    },
    revalidate: 10,
  };
}
