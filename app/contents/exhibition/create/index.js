// Libs
import { PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppFormExhibitionDetails from "app/components/libs/form-exhibitions-details";
import { useExhibitions } from "app/hooks/exhibition";

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
