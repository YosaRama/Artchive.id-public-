// Libs
import { Card, Col, Row } from "antd";

// Component
import ContainerBox from "app/components/container/containerBox";
import CardCount from "app/components/libs/card-count";

// Icon
import { ArtworkIcon } from "public/icons/artwork-icon";
import { CollectorIcon } from "public/icons/collector-icon";
import { GalleryIcon } from "public/icons/gallery-icon";
import { PaintIcon } from "public/icons/paint-icon";

function DashboardHome() {
  // Dummy Data
  const countData = [
    {
      icon: <ArtworkIcon />,
      count: "2540",
      title: "Artwork",
    },
    {
      icon: <PaintIcon />,
      count: "5520",
      title: "Artist",
    },
    {
      icon: <CollectorIcon />,
      count: "1790",
      title: "Collector",
    },
    {
      icon: <GalleryIcon />,
      count: "137",
      title: "Gallery",
    },
  ];

  return (
    <ContainerBox>
      <Row gutter={[16, 0]}>
        {countData.map((item, index) => (
          <Col span={6} key={index}>
            <CardCount icon={item.icon} count={item.count} title={item.title} />
          </Col>
        ))}
      </Row>
    </ContainerBox>
  );
}

export default DashboardHome;
