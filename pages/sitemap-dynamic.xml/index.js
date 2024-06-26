// Libs
import { getServerSideSitemap } from "next-sitemap";

// Queries
import { GET_ALL_ARTWORK_SLUG } from "dashboard/database/query/artwork";
import { GET_ALL_ARTIST_SLUG } from "dashboard/database/query/user";

function SitemapDynamic() {}

export default SitemapDynamic;

export async function getServerSideProps(ctx) {
  //? ============== Get All Artist Slug ============= ?//
  const artistSlug = await GET_ALL_ARTIST_SLUG();
  const artistFields = artistSlug.map((item) => {
    return {
      loc: `${process.env.NEXT_PUBLIC_SITE_URL}artist/${item.slug}`,
      lastmod: new Date().toISOString(),
    };
  });
  // * ====================================== * //

  //? ============== Get All Artwork Slug ============= ?//
  const artworkSlug = await GET_ALL_ARTWORK_SLUG();
  const artworkFields = artworkSlug.map((item) => {
    return {
      loc: `${process.env.NEXT_PUBLIC_SITE_URL}artwork/${item.slug}`,
      lastmod: new Date().toISOString(),
    };
  });
  // * ====================================== * //

  //? ============== Generate Fields ============= ?//
  const fields = artistFields.concat(artworkFields);
  // * ====================================== * //

  return getServerSideSitemap(ctx, fields);
}
