/* eslint-disable @next/next/no-img-element */

// Libs
import propTypes from "prop-types";
import { Card, Tag } from "antd";
import { useRouter } from "next/router";

// Styles
import s from "./index.module.scss";

function ThemesProfileArtworkCard(props) {
  const { approved, status, id, imgSrc, title, price } = props;
  const router = useRouter();

  return (
    <>
      <Card
        className={`${s.card} cardWithoutPadding`}
        onClick={() => router.push(`/profile/studio/${id}`)}
      >
        <div
          className={`${s.imageContainer} ${
            approved ? (status == "SOLD" ? s.disabled : "") : s.disabled
          }`}
        >
          <img src={imgSrc} alt="" />
          <div className={`${s.tagContainer}`}>
            <Tag
              color={
                approved
                  ? status == "SOLD"
                    ? "#BD1E1E"
                    : "#25DF37"
                  : status == "EDIT"
                  ? "#e5890a"
                  : ""
              }
            >
              {approved
                ? status == "SOLD"
                  ? "Sold"
                  : "Approved"
                : status == "EDIT"
                ? "Edit Required"
                : "Waiting Approval"}
            </Tag>
          </div>
        </div>
        <div className={`${s.contentText}`}>
          <h1>{title}</h1>
          <p>IDR {price}</p>
        </div>
      </Card>
    </>
  );
}

ThemesProfileArtworkCard.propTypes = {
  id: propTypes.number,
  approved: propTypes.bool,
  status: propTypes.oneOf(["SOLD", "EDIT", "PUBLISH"]),
  imgSrc: propTypes.string,
  title: propTypes.string,
  price: propTypes.node,
};

export default ThemesProfileArtworkCard;
