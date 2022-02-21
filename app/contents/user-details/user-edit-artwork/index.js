// Libs
import propTypes from "prop-types";
import { Col, Empty, Row } from "antd";

// Component
import AppCardArtwork from "app/components/libs/card-artwork";

function UserEditArtwork(props) {
  const { initialData = [] } = props;
  return (
    <>
      <Row gutter={[16, 0]}>
        {initialData.length != 0 ? (
          initialData.artwork.map((item, index) => (
            <Col span={6} key={index}>
              <AppCardArtwork
                image={
                  item?.media_cover
                    ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`
                    : "/images/default-images.png"
                }
                artistImage={
                  initialData?.profile?.url &&
                  `${process.env.NEXT_PUBLIC_S3_URL}/${initialData?.profile?.url}`
                }
                artistName={initialData?.full_name}
                id={item?.id}
                size={`${item?.width} x ${item?.height} cm`}
                status={item?.status}
                title={item.title}
              />
            </Col>
          ))
        ) : (
          <Col span={24}>
            <Empty />
          </Col>
        )}
      </Row>
    </>
  );
}

UserEditArtwork.propTypes = {
  initialData: propTypes.array,
};

export default UserEditArtwork;
