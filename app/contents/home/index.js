// Libs
import { Card, Col, Row } from "antd";
import Link from "next/link";

// Component
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import CardCount from "app/components/libs/card-count";
import CardUserList from "app/components/libs/card-user-list";
import CardArtwork from "app/components/libs/card-artwork";

// Icon
import { ArtworkIcon } from "public/icons/artwork-icon";
import { CollectorIcon } from "public/icons/collector-icon";
import { GalleryIcon } from "public/icons/gallery-icon";
import { PaintIcon } from "public/icons/paint-icon";

function DashboardHome() {
  //? ========= Dummy Counter Data ======== ?//
  const countData = [
    // TODO : Change to data from database
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
  //* =========================================== *//

  //? ========== Dummy Data for new user ======== ?//
  const userData = [
    // TODO : Change to data from database
    {
      id: 1,
      image: "/images/profile-1.jpg",
      name: "Watson Knight",
      email: "watsonknight@email.com",
      role: "ARTIST",
      date: "29-12-2021",
    },
    {
      id: 2,
      image: "/images/profile-2.jpg",
      name: "Murphy Martin",
      email: "murphymartin@email.com",
      role: "GALLERY",
      date: "28-12-2021",
    },
    {
      id: 3,
      image: "/images/profile-3.jpg",
      name: "John Doe",
      email: "johndoe@email.com",
      role: "COLLECTOR",
      date: "27-12-2021",
    },
    {
      id: 4,
      image: "/images/profile-4.jpg",
      name: "Harper Kelley",
      email: "harperkelley@email.com",
      role: "ADMIN",
      date: "26-12-2021",
    },
    {
      id: 5,
      image: "/images/profile-5.jpg",
      name: "Miller James",
      email: "millerjames@email.com",
      role: "ARTIST",
      date: "25-12-2021",
    },
  ];
  //* =========================================== *//

  //? ================= Dummy data for artwork ==================== ?//
  const artworkData = [
    // TODO : Change to data from database
    {
      id: 1,
      image: "/images/artwork-1.jpg",
      size: "258 x 350 (cm)",
      title: "Artwork I",
      status: "PUBLISH",
      artistName: "Miller James",
      artistImage: "/images/profile-5.jpg",
      featured: true,
    },
    {
      id: 4,
      image: "/images/artwork-4.jpg",
      size: "258 x 350 (cm)",
      title: "Artwork II",
      status: "SOLD",
      artistName: "John Doe",
      artistImage: "/images/profile-3.jpg",
      featured: true,
    },
    {
      id: 5,
      image: "/images/artwork-5.jpg",
      size: "258 x 350 (cm)",
      title: "Artwork III",
      status: "DRAFT",
      artistName: "Murphy Martin",
      artistImage: "/images/profile-2.jpg",
      featured: true,
    },
    {
      id: 6,
      image: "/images/artwork-6.jpg",
      size: "258 x 350 (cm)",
      title: "Artwork IV",
      status: "PUBLISH",
      artistName: "Miller James",
      artistImage: "/images/profile-5.jpg",
      featured: true,
    },
  ];

  // * ====================================== * //

  return (
    <ContainerBox>
      {/* Counter Data Section */}
      <Row gutter={[16, 0]}>
        {countData.map((item, index) => (
          <Col span={6} key={index}>
            <CardCount icon={item.icon} count={item.count} title={item.title} />
          </Col>
        ))}
      </Row>
      {/* ============================= */}

      {/* New User Section */}
      <ContainerCard
        title="New Users"
        style={{ margin: "30px 0" }}
        extra={
          <>
            <Link href={"/dashboard/"}>
              <a>View More</a>
            </Link>
          </>
        }
      >
        {userData.map((item, index) => (
          <CardUserList
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            email={item.email}
            date={item.date}
            role={item.role}
          />
        ))}
      </ContainerCard>
      {/* ============================= */}

      {/* New Artwork Section */}
      <ContainerCard
        title="New Artworks"
        style={{ margin: "30px 0" }}
        extra={
          <>
            <Link href={"/dashboard/"}>
              <a>View More</a>
            </Link>
          </>
        }
      >
        <Row gutter={[16, 0]}>
          {artworkData.map((item, index) => (
            <Col span={6} key={index}>
              <CardArtwork
                image={item.image}
                size={item.size}
                title={item.title}
                id={item.id}
                status={item.status}
                featured={item.featured}
                artistName={item.artistName}
                artistImage={item.artistImage}
              />
            </Col>
          ))}
        </Row>
      </ContainerCard>
      {/* ============================= */}
    </ContainerBox>
  );
}

export default DashboardHome;
