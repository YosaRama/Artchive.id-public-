// Libs
import { PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppFormExhibitionDetails from "app/components/libs/form-exhibitions-details";

// Data Hook
import { useExhibition } from "app/hooks/exhibition";

function AppContentsExhibitionDetailsGeneral() {
  const router = useRouter();
  //? ============== Exhibition Hook ============= ?//
  const { data: exhibitionData, onEdit } = useExhibition({ singleId: router?.query?.id || "" });
  // * ====================================== * //

  return (
    <>
      {exhibitionData && (
        <AppFormExhibitionDetails isEdit={true} initialData={exhibitionData} onSubmit={onEdit} />
      )}
    </>
  );
}

export default AppContentsExhibitionDetailsGeneral;
