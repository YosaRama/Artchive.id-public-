// Libs
import Head from "next/head";

// Contents
import ThemesContentsArtworkList from "themes/contents/artwork/list";

function PageArtworkList() {
  return (
    <>
      <Head>
        <title>Artchive.id Artwork List</title>
      </Head>
      <ThemesContentsArtworkList />
    </>
  );
}

export default PageArtworkList;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
