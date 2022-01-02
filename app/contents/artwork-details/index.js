// Libs
import { useState } from "react";
import { useRouter } from "next/router";
import { PageHeader, Image, Row, Col, Menu, Button } from "antd";

// Component
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import ArtworkGeneralInformation from "./artwork-details-info";
import ArtworkCertificateGenerate from "./artwork-details-certificate";

// Styles
import s from "./index.module.scss";
import UploadButton from "app/components/libs/upload-button";

function ArtworkDetails(props) {
  const { initialValue } = props;
  const router = useRouter();

  //? ============== Handle Select Menu ============= ?//
  const [selectedMenu, setSelectedMenu] = useState("1");
  const handleSelectMenu = (e) => {
    setSelectedMenu(e.key);
  };
  // * ====================================== * //

  //? ============== Handle Change Artwork Image ============= ?//
  const [currentImage, setCurrentImage] = useState(initialValue.media_cover.url);
  // * ====================================== * //

  return (
    <ContainerBox>
      <PageHeader title="Artwork Details" onBack={() => router.back()} />
      <Row gutter={[16, 0]} style={{ marginBottom: 30 }}>
        <Col span={24}>
          <Col span={12} className={s.imageContainer}>
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_URL}/${currentImage}`}
              alt=""
              className={s.image}
            />
          </Col>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <UploadButton onUpload={{}} loading={false}>
            Change Artwork
          </UploadButton>
        </Col>
      </Row>
      <ContainerCard>
        <Menu mode="horizontal" onClick={handleSelectMenu} selectedKeys={selectedMenu}>
          <Menu.Item key={"1"}>General Information</Menu.Item>
          <Menu.Item key={"2"}>Certificate</Menu.Item>
        </Menu>

        {selectedMenu == 1 && <ArtworkGeneralInformation />}
        {selectedMenu == 2 && <ArtworkCertificateGenerate />}
      </ContainerCard>
    </ContainerBox>
  );
}

export default ArtworkDetails;
