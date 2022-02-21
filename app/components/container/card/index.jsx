// Libs
import propTypes from "prop-types";
import { Card } from "antd";

function ContainerCard(props) {
  return (
    <Card className="dashboard-card-container" {...props}>
      {props.children}
    </Card>
  );
}

ContainerCard.propTypes = {
  title: propTypes.string,
};

export default ContainerCard;
