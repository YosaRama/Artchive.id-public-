// Libs
import propTypes from "prop-types";

// Components
import AppFormAuctionDetails from "app/components/libs/form-auction-details";

function AppContentsAuctionDetailsGeneral(props) {
  const { auctionData, onEdit } = props;

  return (
    <>
      {auctionData && (
        <AppFormAuctionDetails isEdit={true} initialData={auctionData} onSubmit={onEdit} />
      )}
    </>
  );
}

AppContentsAuctionDetailsGeneral.propTypes = {
  auctionData: propTypes.any.isRequired,
  onEdit: propTypes.func,
};

export default AppContentsAuctionDetailsGeneral;
