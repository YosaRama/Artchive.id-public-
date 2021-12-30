// Libs
import { Button, Col, Form, Input, Row } from "antd";
import propTypes from "prop-types";
const { Search } = Input;

function DashboardSearch(props) {
  const { searchValue, setSearchValue, searchBy } = props;
  //? ============== Search Handling ============= ?//
  const [searchForm] = Form.useForm();
  // Handle Set value Search
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  // Handle Reset Search
  const handleResetSearch = () => {
    searchForm.resetFields();
    setSearchValue();
  };
  // * ====================================== * //

  return (
    <>
      <Row gutter={[3, 0]}>
        <Col>
          <Form form={searchForm}>
            <Form.Item name="name" style={{ marginBottom: 0 }}>
              <Search placeholder={`Search by ${searchBy}`} onSearch={handleSearch} enterButton />
            </Form.Item>
          </Form>
        </Col>
        <Col>
          <Button onClick={handleResetSearch} disabled={!searchValue}>
            Reset
          </Button>
        </Col>
      </Row>
    </>
  );
}

DashboardSearch.propTypes = {
  searchValue: propTypes.node,
  setSearchValue: propTypes.func,
  searchBy: propTypes.string,
};

export default DashboardSearch;
