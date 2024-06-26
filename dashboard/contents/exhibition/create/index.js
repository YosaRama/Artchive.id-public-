// Libs
import { PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";
import AppFormExhibitionDetails from "dashboard/components/libs/form-exhibitions-details";
import { useExhibitions } from "dashboard/hooks/exhibition";

function AppContentsExhibitionCreate() {
  const router = useRouter();

  //? ============== Exhibition Hooks ============= ?//
  const { onAdd } = useExhibitions({ queryString: `` });
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <PageHeader title="Create New Exhibitions" onBack={() => router.back()} />
        <AppContainerCard>
          <AppFormExhibitionDetails onSubmit={onAdd} />
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsExhibitionCreate;
