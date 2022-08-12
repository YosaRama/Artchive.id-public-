// Contents
import Head from "next/head";
import ThemesContentsArtworkDetails from "themes/contents/artwork/details";

function PageArtworkDetails(props) {
  const { artworkData } = props;
  return (
    <>
      <Head>
        <title>{artworkData.title}</title>
        <meta name="description" content={`${artworkData.description}`} />
        <meta property="og:title" content={`${artworkData.title}`} />
        <meta property="og:description" content={`${artworkData.description}`} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}artwork/${artworkData.slug}`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkData.media_cover.url}`}
        />
        <meta property="product:brand" content="Artchive.id" />
        <meta
          property="product:availability"
          content={artworkData.status == "PUBLISH" ? "in stock" : "out of stock"}
        />
        <meta property="product:condition" content="new" />
        <meta property="product:price:amount" content={`${artworkData.markup_price}`} />
        <meta property="product:price:currency" content="IDR" />
        <meta property="product:retailer_item_id" content={`${artworkData.sku}`} />
      </Head>
      <ThemesContentsArtworkDetails artworkData={artworkData} />
    </>
  );
}

export default PageArtworkDetails;

export const getStaticProps = async (ctx) => {
  const { GET_ARTWORK_BY_SLUG } = require("app/database/query/artwork");

  const artworkDataRes = await GET_ARTWORK_BY_SLUG({ slug: ctx.params.slug });

  //? ============== Artwork Data Parse ============= ?//
  const artworkDataParse = {
    ...artworkDataRes,
    link: `artwork/${artworkDataRes.slug}`,
  };
  // * ====================================== * //

  const artworkData = JSON.parse(JSON.stringify(artworkDataParse));
  return {
    props: {
      artworkData: artworkData,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const { GET_ALL_ARTWORK_SLUG } = require("app/database/query/artwork");
  const artworkSlug = await GET_ALL_ARTWORK_SLUG();

  return {
    paths: artworkSlug.map((item) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: "blocking",
  };
};
