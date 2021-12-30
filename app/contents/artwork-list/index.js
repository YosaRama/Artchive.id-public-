// Libs
import { useRouter } from "next/router";
import { Col, Row } from "antd";

// Components
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import AddButton from "app/components/libs/add-button";
import CardArtwork from "app/components/libs/card-artwork";

// Data Hook
import { useArtworks } from "app/hooks/artwork";

function ArtworkList() {
  const router = useRouter();

  //? ============== Data Fetching ============= ?//
  const { data } = useArtworks({ queryString: "" });
  // * ====================================== * //

  return (
    <ContainerBox>
      <ContainerCard title="Artwork List">
        <AddButton onCreate={() => router.push("/dashboard/artworks/create")}>
          Add Artwork
        </AddButton>
        <Row gutter={[16, 16]}>
          {data &&
            data.map((item, index) => {
              return (
                <Col span={6} key={index}>
                  <CardArtwork
                    image={
                      item?.media_cover
                        ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`
                        : "/images/default-images.png"
                    }
                    artistImage={
                      item?.artist?.profile?.url &&
                      `${process.env.NEXT_PUBLIC_S3_URL}/${item?.artist?.profile?.url}`
                    }
                    artistName={item?.artist?.full_name}
                    id={item?.id}
                    size={`${item?.width} x ${item?.height} cm`}
                    status={item?.status}
                    title={item.title}
                  />
                </Col>
              );
            })}
        </Row>
      </ContainerCard>
    </ContainerBox>
  );
}

export default ArtworkList;
