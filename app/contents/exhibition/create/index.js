// Libs
import { PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppFormExhibitionDetails from "app/components/libs/form-exhibitions-details";

function AppContentsExhibitionCreate() {
  const router = useRouter();
  return (
    <>
      <AppContainerBox>
        <PageHeader title="Create New Exhibitions" onBack={() => router.back()} />
        <AppContainerCard>
          <AppFormExhibitionDetails />
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsExhibitionCreate;
