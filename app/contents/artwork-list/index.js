// Libs
import { Col, Row } from "antd";

// Components
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import AddButton from "app/components/libs/add-button";
import CardArtwork from "app/components/libs/card-artwork";

// Data Hook
import { useArtworks } from "app/hooks/artwork";

function ArtworkList() {
  //? ============== Data Fetching ============= ?//
  const { data } = useArtworks({ queryString: "" });
  const allData = data?.data;
  // * ====================================== * //

  return (
    <ContainerBox>
      <ContainerCard title="Artwork List">
        <AddButton>Add Artwork</AddButton>
        <Row gutter={[16, 16]}>
          {allData &&
            allData.map((item, index) => {
              return (
                <Col span={6} key={item?.index}>
                  <CardArtwork
                    image={
                      item?.media?.[0]?.url
                        ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.media?.[0]?.url}`
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
