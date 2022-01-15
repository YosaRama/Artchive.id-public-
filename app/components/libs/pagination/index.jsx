// Libs
import propTypes from "prop-types";
import { Pagination } from "antd";

function CustomPagination(props) {
  const { total, handlePagination, pageSize, current } = props;
  return (
    <Pagination
      total={total}
      onChange={handlePagination}
      defaultPageSize={pageSize}
      defaultCurrent={current}
    />
  );
}

CustomPagination.propTypes = {
  total: propTypes.number,
  handlePagination: propTypes.func,
  pageSize: propTypes.number,
  current: propTypes.number,
};

export default CustomPagination;
