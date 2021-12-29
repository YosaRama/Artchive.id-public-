// Libs
import { Col, Row } from "antd";

// Components
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import AddButton from "app/components/libs/add-button";
import CardArtwork from "app/components/libs/card-artwork";

// Data Hook

function ArtworkList() {
  return (
    <ContainerBox>
      <ContainerCard title="Artwork List">
        <AddButton>Add Artwork</AddButton>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <CardArtwork image="/" />
          </Col>
          <Col span={6}>
            <CardArtwork image="/" />
          </Col>
          <Col span={6}>
            <CardArtwork image="/" />
          </Col>
          <Col span={6}>
            <CardArtwork image="/" />
          </Col>
          <Col span={6}>
            <CardArtwork image="/" />
          </Col>
          <Col span={6}>
            <CardArtwork image="/" />
          </Col>
          <Col span={6}>
            <CardArtwork image="/" />
          </Col>
          <Col span={6}>
            <CardArtwork image="/" />
          </Col>
        </Row>
      </ContainerCard>
    </ContainerBox>
  );
}

export default ArtworkList;
