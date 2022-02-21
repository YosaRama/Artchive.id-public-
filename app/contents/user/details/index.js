// Libs
import { useState } from "react";
import { Col, Row, Image, Menu, Skeleton } from "antd";
import { useRouter } from "next/router";

// Data Hook
import { useUser } from "app/hooks/user";
import { useUploads } from "app/hooks/upload";

// Component
import AppContainerBox from "app/components/container/box";
import AppUploadButton from "app/components/libs/upload-button";
import AppContainerCard from "app/components/container/card";
import AppRoleTag from "app/components/libs/role-tag";

// Content
import AppContentsUserDetailsInfo from "./info";
import AppContentsUserDetailsPassword from "./password";
import AppContentsUserDetailsBilling from "./billing";
import AppContentsUserDetailsArtwork from "./artwork";
import AppContentsUserDetailsCollection from "./collection";
import AppContentsUserDetailsAdvance from "./advance";

// Style
import s from "./index.module.scss";

// Icons
import { ArrowLeftOutlined } from "@ant-design/icons";

function AppContentsUserDetails() {
  const router = useRouter();
  const id = router.query.id;

  //? ============== Handle Initial Data ============= ?//
  const { data, onEditInfo, onEditPassword, onEditProfileImage, onEditBannerImage, loading } =
    useUser({
      singleId: id,
    });
  // * ====================================== * //

  //? ============== Handle Select Menu ============= ?//
  const [selectedMenu, setSelectedMenu] = useState("1");
  const handleSelectMenu = (e) => {
    setSelectedMenu(e.key);
  };
  // * ====================================== * //

  //? ============== Handle Change Profile Image ============= ?//
  const { onUpload, loading: uploadLoading } = useUploads();
  const handleChangeProfile = async (file) => {
    const upload = await onUpload({ file: file.file, userId: id });
    if (upload.success) {
      const result = await onEditProfileImage({ profileId: upload.data.id });
    }
  };
  // * ====================================== * //

  //? ============== Handle Change Banner Image ============= ?//
  const handleChangeBanner = async (file) => {
    const upload = await onUpload({ file: file.file, userId: id });
    if (upload.success) {
      const result = await onEditBannerImage({ bannerId: upload.data.id });
    }
  };
  // * ====================================== * //

  return (
    <AppContainerBox>
      <AppContainerCard
        title={
          <>
            <p style={{ marginBottom: 0 }}>
              <span className={s.backIcon} onClick={() => router.back()}>
                <ArrowLeftOutlined />
              </span>
              Edit User
            </p>
          </>
        }
      >
        <section>
          <Col span={24} className={s.profileBanner}>
            <Image
              src={
                data?.banner?.url
                  ? `${process.env.NEXT_PUBLIC_S3_URL}/${data?.banner.url}`
                  : "/images/default-images.jpg"
              }
              alt=""
              preview={false}
            />
          </Col>
          <Col span={24} style={{ textAlign: "right" }}>
            <AppUploadButton onUpload={handleChangeBanner} loading={uploadLoading}>
              Change Banner Profile
            </AppUploadButton>
          </Col>
        </section>
        <Row gutter={[16, 0]}>
          <Col span={8} className={s.profileImage}>
            <Col span={24}>
              <Image
                src={
                  data?.profile?.url
                    ? `${process.env.NEXT_PUBLIC_S3_URL}/${data?.profile.url}`
                    : "/images/profile-default.png"
                }
                alt=""
              />
            </Col>
            <Col span={24}>
              <AppUploadButton onUpload={handleChangeProfile} loading={uploadLoading}>
                Change Profile Image
              </AppUploadButton>
            </Col>
          </Col>
          <Col span={8} className={s.profileDetails}>
            <Col span={24}>
              {data?.length != 0 ? (
                <>
                  <h1 className={s.name}>{data?.full_name}</h1>
                  <p className={s.email}>{data?.email}</p>
                  <AppRoleTag role={data?.role} />
                </>
              ) : (
                <Skeleton />
              )}
            </Col>
          </Col>
        </Row>
        <Col span={22} style={{ margin: "30px auto" }}>
          <Menu mode="horizontal" selectedKeys={selectedMenu} onClick={handleSelectMenu}>
            <Menu.Item key="1">General Information</Menu.Item>
            <Menu.Item key="2">Change Password</Menu.Item>
            <Menu.Item key="3">Billing Information</Menu.Item>
            <Menu.Item key="4">Artwork</Menu.Item>
            <Menu.Item key="5">Collection</Menu.Item>
            <Menu.Item key="6">Advance</Menu.Item>
          </Menu>

          {data?.length != 0 && (
            <Col span={23} style={{ margin: "30px auto" }}>
              {selectedMenu == 1 && (
                <AppContentsUserDetailsInfo
                  initialData={data}
                  onSave={onEditInfo}
                  loading={loading}
                />
              )}
              {selectedMenu == 2 && <AppContentsUserDetailsPassword onSave={onEditPassword} />}
              {selectedMenu == 3 && <AppContentsUserDetailsBilling />}
              {selectedMenu == 4 && <AppContentsUserDetailsArtwork initialData={data} />}
              {selectedMenu == 5 && <AppContentsUserDetailsCollection />}
              {selectedMenu == 6 && (
                <AppContentsUserDetailsAdvance status={data.status} id={data.id} />
              )}
            </Col>
          )}
        </Col>
      </AppContainerCard>
    </AppContainerBox>
  );
}

export default AppContentsUserDetails;
