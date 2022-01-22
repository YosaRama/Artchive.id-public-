// Libs
import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Empty, Row, Pagination, Spin } from "antd";

// Components
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import AddButton from "app/components/libs/add-button";
import CardArtwork from "app/components/libs/card-artwork";

// Data Hook
import { useArtworks } from "app/hooks/artwork";

function ArtworkList() {
  const router = useRouter();

  //? ============== Handle Pagination ============= ?//
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePagination = (value) => {
    setCurrentPage(value);
  };
  // * ====================================== * //

  //? ============== Data Fetching ============= ?//
  const { data, total, loading } = useArtworks({
    queryString: `limit=${pageSize}&page=${currentPage}`,
  });
  // * ====================================== * //

  return (
    <ContainerBox>
      <ContainerCard title="Artwork List">
        <AddButton onCreate={() => router.push("/dashboard/artworks/create")}>
          Add Artwork
        </AddButton>
        <Spin spinning={loading}>
          <Row gutter={[16, 16]}>
            {data?.length != 0 &&
              data?.map((item, index) => {
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
            {data?.length == 0 && (
              <Col span={24}>
                <Empty />
              </Col>
            )}
            <Col span={24} style={{ textAlign: "right" }}>
              <Pagination
                total={total}
                defaultPageSize={pageSize}
                current={currentPage}
                onChange={handlePagination}
              />
            </Col>
          </Row>
        </Spin>
      </ContainerCard>
    </ContainerBox>
  );
}

export default ArtworkList;
