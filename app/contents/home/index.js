// Libs
import { Card, Col, Empty, Row } from "antd";
import Link from "next/link";

// Component
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import CardCount from "app/components/libs/card-count";
import CardUserList from "app/components/libs/card-user-list";
import CardArtwork from "app/components/libs/card-artwork";

// Data Hook
import { useArtworks } from "app/hooks/artwork";
import { useUsers } from "app/hooks/user";

// Icon
import { ArtworkIcon } from "public/icons/artwork-icon";
import { CollectorIcon } from "public/icons/collector-icon";
import { GalleryIcon } from "public/icons/gallery-icon";
import { PaintIcon } from "public/icons/paint-icon";

function DashboardHome() {
  //? ============== Artwork Hook ============= ?//
  const { data: artworkData, total: artworkTotal } = useArtworks({ queryString: "limit=4" });
  // * ====================================== * //

  //? ============== User Hook  ============= ?//
  const { data: userData, onDelete: userDelete } = useUsers({ queryString: "limit=5" });
  // * ====================================== * //

  //? ============== Artist Hook ============= ?//
  const { total: artistTotal } = useUsers({ queryString: "role=ARTIST" });
  // * ====================================== * //

  //? ============== Gallery Hook ============= ?//
  const { total: galleryTotal } = useUsers({ queryString: "role=GALLERY" });
  // * ====================================== * //

  //? ============== Artist Hook ============= ?//
  const { total: collectorTotal } = useUsers({ queryString: "role=COLLECTOR" });
  // * ====================================== * //

  //? ========= Counter Data ======== ?//
  const countData = [
    {
      icon: <ArtworkIcon />,
      count: artworkTotal,
      title: "Artwork",
      link: "/dashboard/artworks",
    },
    {
      icon: <PaintIcon />,
      count: artistTotal,
      title: "Artist",
      link: "/dashboard/users/artist",
    },
    {
      icon: <CollectorIcon />,
      count: collectorTotal,
      title: "Collector",
      link: "/dashboard/users/collector",
    },
    {
      icon: <GalleryIcon />,
      count: galleryTotal,
      title: "Gallery",
      link: "/dashboard/users/gallery",
    },
  ];
  //* =========================================== *//

  return (
    <ContainerBox>
      {/* Counter Data Section */}
      <Row gutter={[16, 0]}>
        {countData.map((item, index) => (
          <Col span={6} key={index}>
            <CardCount icon={item.icon} count={item.count} title={item.title} link={item.link} />
          </Col>
        ))}
      </Row>
      {/* ============================= */}

      {/* New User Section */}
      <ContainerCard title="New Users" style={{ margin: "30px 0" }}>
        {userData?.map((item, index) => (
          <CardUserList
            key={index}
            id={item.id}
            image={item.profile?.url && `${process.env.NEXT_PUBLIC_S3_URL}/${item.profile?.url}`}
            name={item.full_name}
            email={item.email}
            date={item.date}
            role={item.role}
            onDelete={userDelete}
            status={item.status}
          />
        ))}
        {userData?.length == 0 && (
          <Col span={24}>
            <Empty />
          </Col>
        )}
      </ContainerCard>
      {/* ============================= */}

      {/* New Artwork Section */}
      <ContainerCard
        title="New Artworks"
        style={{ margin: "30px 0" }}
        extra={
          <>
            <Link href={"/dashboard/artworks"}>
              <a>View More</a>
            </Link>
          </>
        }
      >
        <Row gutter={[16, 0]}>
          {artworkData?.map((item, index) => (
            <Col span={6} key={index}>
              <CardArtwork
                image={
                  item?.media_cover?.url &&
                  `${process.env.NEXT_PUBLIC_S3_URL}/${item.media_cover?.url}`
                }
                size={`${item.width} x ${item.height} cm`}
                title={item.title}
                id={item.id}
                status={item.status}
                featured={true}
                artistName={item.artist?.full_name}
                artistImage={
                  item.artist?.profile?.url &&
                  `${process.env.NEXT_PUBLIC_S3_URL}/${item.artist?.profile?.url}`
                }
              />
            </Col>
          ))}
          {artworkData?.length == 0 && (
            <Col span={24}>
              <Empty />
            </Col>
          )}
        </Row>
      </ContainerCard>
      {/* ============================= */}
    </ContainerBox>
  );
}

export default DashboardHome;
