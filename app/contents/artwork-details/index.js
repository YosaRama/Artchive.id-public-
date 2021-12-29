// Libs
import { useState } from "react";
import { useRouter } from "next/router";
import { PageHeader, Image, Row, Col, Form, Input, Menu } from "antd";

// Component
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import ArtworkGeneralInformation from "../artwork-details-general";

function ArtworkDetails(props) {
  const { initialValue } = props;
  const router = useRouter();

  //? ============== Handle Select Menu ============= ?//
  const [selectedMenu, setSelectedMenu] = useState("1");
  const handleSelectMenu = (e) => {
    setSelectedMenu(e.key);
  };
  // * ====================================== * //

  return (
    <ContainerBox>
      <PageHeader title="Artwork Details" onBack={() => router.back()} />
      <Row gutter={[16, 0]} style={{ marginBottom: 30 }}>
        <Col span={12} style={{ margin: "0 auto" }}>
          <Image src={`${process.env.NEXT_PUBLIC_S3_URL}/${initialValue.media[0].url}`} alt="" />
        </Col>
      </Row>
      <ContainerCard>
        <Menu mode="horizontal" onClick={handleSelectMenu} selectedKeys={selectedMenu}>
          <Menu.Item key={"1"}>General Information</Menu.Item>
          <Menu.Item key={"2"}>Certificate</Menu.Item>
        </Menu>

        {selectedMenu == 1 && <ArtworkGeneralInformation initialValue={initialValue} />}
      </ContainerCard>
    </ContainerBox>
  );
}

export default ArtworkDetails;
