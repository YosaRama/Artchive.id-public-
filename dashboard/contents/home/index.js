// Libs
import { Card, Col, Empty, Row } from "antd";
import Link from "next/link";

// Component
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";
import AppCardCount from "dashboard/components/libs/card-count";
import AppCardUserList from "dashboard/components/libs/card-user-list";
import AppCardArtwork from "dashboard/components/libs/card-artwork";

// Data Hook
import { useArtworks } from "dashboard/hooks/artwork";
import { useUsers } from "dashboard/hooks/user";

// Icon
import { ArtworkIcon } from "public/icons/artwork-icon";
import { CollectorIcon } from "public/icons/collector-icon";
import { GalleryIcon } from "public/icons/gallery-icon";
import { PaintIcon } from "public/icons/paint-icon";
import { UnorderedListOutlined } from "@ant-design/icons";

function AppContentsHome() {
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
    <AppContainerBox>
      {/* Counter Data Section */}
      <Row gutter={[16, 0]}>
        {countData.map((item, index) => (
          <Col span={6} key={index}>
            <AppCardCount icon={item.icon} count={item.count} title={item.title} link={item.link} />
          </Col>
        ))}
      </Row>
      {/* ============================= */}

      {/* New User Section */}
      <AppContainerCard title="New Users" style={{ margin: "30px 0" }}>
        {userData?.map((item, index) => (
          <AppCardUserList
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
      </AppContainerCard>
      {/* ============================= */}

      {/* New Artwork Section */}
      <AppContainerCard
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
              <AppCardArtwork
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
      </AppContainerCard>
      {/* ============================= */}
    </AppContainerBox>
  );
}

export default AppContentsHome;
