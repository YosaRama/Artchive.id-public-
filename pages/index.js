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

export const getStaticProps = async (ctx) => {
  //? ============== Artwork Data ============= ?//
  const artworkData = [{}, {}, {}, {}]; //TODO : Get Data with Artwork Query
  // * ====================================== * //

  console.log(artworkData);

  //? ============== Artist Data ============= ?//
  const artistData = [{}, {}, {}, {}]; // TODO : Get Data with Artist Query
  // * ====================================== * //

  return {
    props: {
      artistData: artistData,
      artworkData: artworkData,
    },
  };
};
