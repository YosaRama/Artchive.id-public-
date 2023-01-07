// Libs
import Head from "next/head";

// Contents
import ThemesContentsGenreList from "themes/contents/genre/list";

function PageGenreList() {
  return (
    <>
      <Head>
        <title>Artchive.id Genre List</title>
      </Head>
      <ThemesContentsGenreList />
    </>
  );
}

export default PageGenreList;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
    revalidate: 10,
  };
};
