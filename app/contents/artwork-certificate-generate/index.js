// Libs
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, Row, Image, Spin } from "antd";
import moment from "moment";
import propTypes from "prop-types";

// Data Hook
import { useArtwork } from "app/hooks/artwork";

function ArtworkCertificateGenerate(props) {
  const { initialValue } = props;
  const router = useRouter();

  //? ============== Artwork Hook ============= ?//
  const { data, onGenerateCertificate, loading } = useArtwork({ singleId: initialValue.id });
  // * ====================================== * //

  //? ============== Handle Generate Certificate ============= ?//
  const handleGenerateCertificate = async () => {
    const submission = {
      certificateId: data?.certificate?.length != 0 ? data?.certificate?.length + 1 : 1,
      title: data?.title,
      artist: data?.artist?.full_name,
      artistId: data?.artist_id,
      artworkDate: moment(data?.createdAt).format("DDMMYYYY"),
      size: `${data?.width} x ${data?.height}`,
      signature: data?.artist?.signature?.url,
      description: data?.description,
      material: data?.material,
      artworkImage: `${process.env.NEXT_PUBLIC_S3_URL}/${data?.media_cover?.url}`,
    };

    const result = await onGenerateCertificate(submission);
    if (result) {
      console.log(result);
    }
  };
  // * ====================================== * //

  return (
    <Spin spinning={loading}>
      <Col style={{ margin: "100px auto", textAlign: "center" }} span={22}>
        {data?.certificate?.length == 0 && (
          <Button
            type="primary"
            onClick={handleGenerateCertificate}
            disabled={data?.status != "SOLD"}
          >
            Create Certificate
          </Button>
        )}
        {data?.certificate?.length != 0 && (
          <Row>
            <Col span={12}>
              <iframe
                src={`${process.env.NEXT_PUBLIC_S3_URL}/${data?.certificate?.[0]?.url}`}
                style={{ width: "100%", height: 400 }}
              />
            </Col>
            <Col
              span={12}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <div>
                <Col span={24}>
                  <Button
                    type="primary"
                    style={{ marginBottom: 20, width: 250, height: 50 }}
                    disabled={!data}
                  >
                    <a
                      href={`${process.env.NEXT_PUBLIC_S3_URL}/${data?.certificate?.[0]?.url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download Certificate
                    </a>
                  </Button>
                </Col>
                <Col span={24}>
                  <Button
                    style={{ marginBottom: 20, width: 250, height: 50 }}
                    onClick={handleGenerateCertificate}
                  >
                    Update Certificate
                  </Button>
                </Col>
              </div>
            </Col>
          </Row>
        )}
      </Col>
    </Spin>
  );
}

ArtworkCertificateGenerate.propTypes = {
  initialValue: propTypes.object,
};

export default ArtworkCertificateGenerate;
