// Libs
import { useRouter } from "next/router";
import { Col, PageHeader, Row } from "antd";
import { useState } from "react";

// Components
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";

// Contents
import AppContentsExhibitionDetailsNavbar from "./navbar";
import AppContentsExhibitionDetailsGeneral from "./general";
import AppContentsExhibitionDetailsArtwork from "./artwork";
import AppContentsExhibitionDetailsArtist from "./artist";

// Data Hook
import { useExhibition } from "dashboard/hooks/exhibition";
import AppContentsExhibitionDetailsGallery from "./gallery";

function AppContentsExhibitionDetails() {
  const router = useRouter();

  //? ============== Handle Menu ============= ?//
  const [currentMenu, setCurrentMenu] = useState(1);
  // * ====================================== * //

  //? ============== Exhibition Hook ============= ?//
  const {
    data: exhibitionData,
    onEdit,
    onAddArtist,
    onDeleteArtist,
    onAddArtwork,
    onDeleteArtwork,
    onAddGallery,
    onDeleteGallery,
  } = useExhibition({ singleId: router?.query?.id || "" });
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <PageHeader title="Exhibition Details" onBack={() => router.back()} />
        <Row gutter={16}>
          <Col span={6}>
            <AppContainerCard>
              <AppContentsExhibitionDetailsNavbar
                currentMenu={currentMenu}
                setCurrentMenu={setCurrentMenu}
              />
            </AppContainerCard>
          </Col>
          <Col span={18}>
            <AppContainerCard
              title={
                currentMenu == 1
                  ? "Exhibition General"
                  : currentMenu == 2
                  ? "Artist on Exhibition"
                  : currentMenu == 3
                  ? "Artwork on Exhibition"
                  : currentMenu == 4
                  ? "Gallery on Exhibition"
                  : ""
              }
            >
              {currentMenu == 1 && (
                <AppContentsExhibitionDetailsGeneral
                  exhibitionData={exhibitionData}
                  onEdit={onEdit}
                />
              )}
              {currentMenu == 2 && (
                <AppContentsExhibitionDetailsArtist
                  artistData={exhibitionData?.artists || []}
                  onAddArtist={onAddArtist}
                  onDeleteArtist={onDeleteArtist}
                />
              )}
              {currentMenu == 3 && (
                <AppContentsExhibitionDetailsArtwork
                  artworkData={exhibitionData?.artworks}
                  onAddArtwork={onAddArtwork}
                  onDeleteArtwork={onDeleteArtwork}
                />
              )}
              {currentMenu == 4 && (
                <AppContentsExhibitionDetailsGallery
                  galleryData={exhibitionData?.media_gallery}
                  onAddGallery={onAddGallery}
                  onDeleteGallery={onDeleteGallery}
                />
              )}
            </AppContainerCard>
          </Col>
        </Row>
      </AppContainerBox>
    </>
  );
}

export default AppContentsExhibitionDetails;
