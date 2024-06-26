// Libs
import { useState } from "react";
import { useRouter } from "next/router";
import { PageHeader, Image, Row, Col, Menu } from "antd";

// Data Hook
import { useUploads } from "dashboard/hooks/upload";
import { useArtwork } from "dashboard/hooks/artwork";

// Contents
import AppContentsArtworkDetailsInfo from "./info";
import AppContentsArtworkDetailsCertification from "./certification";
import AppContentsArtworkDetailsGalleries from "./galleries";

// Component
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";
import AppUploadButton from "dashboard/components/libs/upload-button";

// Styles
import s from "./index.module.scss";

function AppContentsArtworkDetails(props) {
  const { initialValue } = props;
  const router = useRouter();

  //? ============== Artwork Hook ============= ?//
  const { data: artworkData, onChangeCover } = useArtwork({ singleId: router?.query?.id });
  // * ====================================== * //

  //? ============== Handle Select Menu ============= ?//
  const [selectedMenu, setSelectedMenu] = useState("1");
  const handleSelectMenu = (e) => {
    setSelectedMenu(e.key);
  };
  // * ====================================== * //

  //? ============== Handle Change Artwork Image ============= ?//
  const { onUpload, loading: uploadLoading } = useUploads();
  const handleUpload = async (file) => {
    const result = await onUpload({
      file: file.file,
      userId: initialValue.artist_id,
      artworkId: initialValue.id,
    });
    if (result.success) {
      onChangeCover({ coverId: result.data.id });
    }
  };
  // * ====================================== * //

  return (
    <AppContainerBox>
      <PageHeader title="Artwork Details" onBack={() => router.back()} />
      <Row gutter={[16, 0]} style={{ marginBottom: 30 }}>
        <Col span={24}>
          <Col span={12} className={s.imageContainer}>
            <Image
              src={
                (artworkData?.media_cover?.url &&
                  `${process.env.NEXT_PUBLIC_S3_URL}/${artworkData?.media_cover?.url}`) ||
                `${process.env.NEXT_PUBLIC_S3_URL}/${initialValue?.media_cover?.url}`
              }
              alt=""
              className={s.image}
            />
          </Col>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <AppUploadButton onUpload={handleUpload} loading={uploadLoading}>
            Change Artwork
          </AppUploadButton>
        </Col>
      </Row>
      <AppContainerCard>
        <Menu mode="horizontal" onClick={handleSelectMenu} selectedKeys={selectedMenu}>
          <Menu.Item key={"1"}>General Information</Menu.Item>
          <Menu.Item key={"2"}>Media Galleries</Menu.Item>
          <Menu.Item key={"3"}>Certificate</Menu.Item>
        </Menu>

        {selectedMenu == 1 && <AppContentsArtworkDetailsInfo />}
        {selectedMenu == 2 && <AppContentsArtworkDetailsGalleries />}
        {selectedMenu == 3 && <AppContentsArtworkDetailsCertification />}
      </AppContainerCard>
    </AppContainerBox>
  );
}

export default AppContentsArtworkDetails;
