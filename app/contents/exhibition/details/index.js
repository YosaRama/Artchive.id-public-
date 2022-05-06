// Libs
import { useRouter } from "next/router";
import { Col, PageHeader, Row } from "antd";
import { useState } from "react";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppContentsExhibitionDetailsNavbar from "./navbar";
import AppContentsExhibitionDetailsGeneral from "./general";

function AppContentsExhibitionDetails() {
  const router = useRouter();

  //? ============== Handle Menu ============= ?//
  const [currentMenu, setCurrentMenu] = useState(1);
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <PageHeader title="Exhibition Details" onBack={() => router.back()} />
        <Row gutter={16}>
          <Col span={4}>
            <AppContainerCard>
              <AppContentsExhibitionDetailsNavbar
                currentMenu={currentMenu}
                setCurrentMenu={setCurrentMenu}
              />
            </AppContainerCard>
          </Col>
          <Col span={20}>
            <AppContainerCard
              title={
                currentMenu == 1
                  ? "Exhibition General"
                  : currentMenu == 2
                  ? "Artist on Exhibition"
                  : currentMenu == 3
                  ? "Artwork on Exhibition"
                  : ""
              }
            >
              {currentMenu == 1 && <AppContentsExhibitionDetailsGeneral />}
            </AppContainerCard>
          </Col>
        </Row>
      </AppContainerBox>
    </>
  );
}

export default AppContentsExhibitionDetails;
