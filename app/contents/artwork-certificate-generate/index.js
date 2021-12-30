// Libs
import moment from "moment";
import propTypes from "prop-types";
import { useState } from "react";
import { Button, Col } from "antd";

// Data Hook
import { useArtwork } from "app/hooks/artwork";

function ArtworkCertificateGenerate(props) {
  const { initialValue } = props;

  //? ============== Artwork Hook ============= ?//
  const { data, onGenerateCertificate } = useArtwork({ singleId: initialValue.id });
  // * ====================================== * //

  //? ============== Handle Generate Certificate ============= ?//
  const [certificateURL, setCertificateURL] = useState();
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
    <Col style={{ margin: "100px auto", textAlign: "center" }} span={22}>
      <Button type="primary" onClick={handleGenerateCertificate}>
        Create Certificate
      </Button>
    </Col>
  );
}

ArtworkCertificateGenerate.propTypes = {
  initialValue: propTypes.object,
};

export default ArtworkCertificateGenerate;
