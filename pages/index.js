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
  const artworkData = [
    { title: "Cold Heart", size: "200 x 300", imgUrl: "/images/artwork-1.jpg" },
    { title: "Follow Your Heart", size: "300 x 400", imgUrl: "/images/artwork-2.jpg" },
    { title: "Between You and Me", size: "250 x 500", imgUrl: "/images/artwork-3.jpg" },
    { title: "Art is My Blood", size: "100 x 100", imgUrl: "/images/artwork-4.jpg" },
  ]; //TODO : Get Data with Artwork Query
  // * ====================================== * //

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
