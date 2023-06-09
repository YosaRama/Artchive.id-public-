/* eslint-disable @next/next/no-img-element */

// Libs
import { PageHeader } from "antd";
import propTypes from "prop-types";
import { useRouter } from "next/router";

// Components
import ThemesContentsAuctionArtworkDetails from "themes/contents/auction/artwork/information";
import ThemesContainerMain from "themes/components/container/main";

// Styles
import s from "./index.module.scss";

function ThemesContentsAuctionDetails(props) {
  const { artworkData } = props;
  const artworkDetails = artworkData.lots[0];
  const router = useRouter();

  return (
    <>
      <section className={s.bgWhite}>
        <ThemesContainerMain>
          <PageHeader
            style={{ padding: 0, marginBottom: 20 }}
            title={`${artworkDetails.title} Lot Details`}
            onBack={() => router.back()}
          />

          <ThemesContentsAuctionArtworkDetails
            artworkImg={artworkDetails.media_cover.url}
            mediaGallery={artworkDetails.media_gallery}
            title={artworkDetails.title}
            artistName={artworkDetails.artist}
            imgWidth={artworkDetails.width}
            imgHeight={artworkDetails.height}
            media={artworkDetails.media}
            information={`${artworkDetails.artist} painted this in 1913`}
            description={artworkDetails.description}
            artistRole={"Artist"}
            artistDesc={
              "Lorem ipsum dolor sit amet consectetur. Massa lectus ut quis ultricies volutpat in. Eget amet ultrices et aliquam. Sed in condimentum pellentesque nulla gravida varius massa at risus. Neque duis blandit gravida sem lacus scelerisque metus. Lorem ipsum dolor sit amet consectetur. Massa lectus ut quis ultricies volutpat in. Eget amet ultrices et aliquam. Sed in condimentum pellentesque nulla gravida varius massa at risus. Neque duis blandit gravida sem lacus scelerisque metus.Lorem ipsum dolor sit amet consectetur. Massa lectus ut quis ultricies volutpat in. Eget amet ultrices et aliquam. Sed in condimentum pellentesque nulla gravida varius massa at risus. Neque duis blandit gravida sem lacus scelerisque metus."
            }
            imgCondition={artworkDetails.condition}
            conditionDesc={`Lorem ipsum dolor sit amet consectetur. Imperdiet tellus non sit risus aenean viverra. Interdum orci non accumsan posuere vel.`}
            lotEnd={artworkDetails.end_time}
            estimation={artworkDetails.estimation}
            startingBid={artworkDetails.initial_price}
            step={artworkDetails.step}
            logs={artworkDetails.logs}
          />
        </ThemesContainerMain>
      </section>
    </>
  );
}

ThemesContentsAuctionDetails.propTypes = {
  artworkData: propTypes.any.isRequired,
};

export default ThemesContentsAuctionDetails;
