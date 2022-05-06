// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";

// Components
import AppFormExhibitionDetails from "app/components/libs/form-exhibitions-details";

function AppContentsExhibitionDetailsGeneral(props) {
  const { exhibitionData, onEdit } = props;
  const router = useRouter();

  return (
    <>
      {exhibitionData && (
        <AppFormExhibitionDetails isEdit={true} initialData={exhibitionData} onSubmit={onEdit} />
      )}
    </>
  );
}

AppContentsExhibitionDetailsGeneral.propTypes = {
  exhibitionData: propTypes.any,
  onEdit: propTypes.func,
};

export default AppContentsExhibitionDetailsGeneral;
