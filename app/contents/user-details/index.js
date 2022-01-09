// Libs
import { useState } from "react";
import { Col, Row, Image, Menu, Skeleton } from "antd";
import { useRouter } from "next/router";

// Data Hook
import { useUser } from "app/hooks/user";

// Component
import ContainerBox from "app/components/container/containerBox";
import UploadButton from "app/components/libs/upload-button";
import ContainerCard from "app/components/container/containerCard";
import RoleTag from "app/components/libs/role-tag";

// Content
import UserEditInfo from "./user-edit-info";
import UserEditPassword from "./user-edit-password";
import UserEditBilling from "./user-edit-billing";
import UserEditArtwork from "./user-edit-artwork";
import UserEditCollection from "./user-edit-collection";

// Style
import s from "./index.module.scss";

function EditUser() {
  const router = useRouter();

  //? ============== Handle Initial Data ============= ?//
  const { data, onEditInfo, onEditPassword } = useUser({ singleId: router.query.id });
  // * ====================================== * //

  //? ============== Handle Select Menu ============= ?//
  const [selectedMenu, setSelectedMenu] = useState("1");
  const handleSelectMenu = (e) => {
    setSelectedMenu(e.key);
  };
  // * ====================================== * //

  return (
    <ContainerBox>
      <ContainerCard title="Edit User">
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
              <UploadButton>Change Profile Image</UploadButton>
            </Col>
          </Col>
          <Col span={8} className={s.profileDetails}>
            <Col span={24}>
              {data.length != 0 ? (
                <>
                  <h1 className={s.name}>{data?.full_name}</h1>
                  <p className={s.email}>{data?.email}</p>
                  <RoleTag role={data?.role} />
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
          </Menu>

          {data.length != 0 && (
            <Col span={23} style={{ margin: "30px auto" }}>
              {selectedMenu == 1 && <UserEditInfo initialData={data} onSave={onEditInfo} />}
              {selectedMenu == 2 && <UserEditPassword onSave={onEditPassword} />}
              {selectedMenu == 3 && <UserEditBilling />}
              {selectedMenu == 4 && <UserEditArtwork />}
              {selectedMenu == 5 && <UserEditCollection />}
            </Col>
          )}
        </Col>
      </ContainerCard>
    </ContainerBox>
  );
}

export default EditUser;
