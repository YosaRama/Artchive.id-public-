// Libs
import propTypes from "prop-types";
import { Card } from "antd";

function AppContainerCard(props) {
  return (
    <Card className="dashboard-card-container" {...props}>
      {props.children}
    </Card>
  );
}

AppContainerCard.propTypes = {
  title: propTypes.string,
};

export default AppContainerCard;
