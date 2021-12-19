import { Card } from "antd";

function ContainerCard(props) {
  return (
    <Card className="dashboard-card-container" {...props}>
      {props.children}
    </Card>
  );
}

export default ContainerCard;
