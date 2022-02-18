// Libs
import propTypes from "prop-types";
import { Col, Form, Radio, Row } from "antd";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

// Data Hook
import { useUser } from "app/hooks/user";

// Components
import PageContainerBox from "themes/components/container/box-container";
import PageButton from "themes/components/libs/page-button";
import RadioCard from "themes/components/libs/page-radio-card";

// Styles
import s from "./index.module.scss";

function RegisterRoleSelectionPage(props) {
  const { userId, email, hashEmail } = props;
  const router = useRouter();
  //? ============== User Hook ============= ?//
  const { onEditRole } = useUser({ singleId: userId });
  // * ====================================== * //

  //? ============== Handle Edit Role ============= ?//
  const [roleForm] = Form.useForm();
  const handleEdit = () => {
    roleForm.validateFields().then(async (value) => {
      const submission = {
        role: value.role,
      };

      const result = await onEditRole(submission);

      if (result) {
        router.push(`/register/thank-you/${userId}/${email}/${encodeURIComponent(hashEmail)}`);
      }
    });
  };
  // * ====================================== * //
  return (
    <>
      <PageContainerBox sectionClass={s.section} containerClass={s.container}>
        <Col span={12}>
          <Col span={24}>
            <h1 className={s.title}>Role Selection</h1>
          </Col>
          <Col span={24}>
            <Form form={roleForm}>
              <Form.Item
                name="role"
                rules={[{ required: true, message: "Please select your role!" }]}
              >
                <Radio.Group style={{ width: "100%" }}>
                  <Row gutter={[16, 0]}>
                    <Col span={8}>
                      <RadioCard value="ARTIST" imgSrc="/images/frontpage-artist-icon.png">
                        Artist
                      </RadioCard>
                    </Col>
                    <Col span={8}>
                      <RadioCard value="COLLECTOR" imgSrc="/images/frontpage-collector-icon.png">
                        Collector
                      </RadioCard>
                    </Col>
                    <Col span={8}>
                      <RadioCard value="GALLERY" imgSrc="/images/frontpage-gallery-icon.png">
                        Gallery
                      </RadioCard>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
            </Form>
          </Col>
          <Col span={24} style={{ margin: "30px 0" }}>
            <PageButton onClick={handleEdit}>SELECT ROLE</PageButton>
          </Col>
        </Col>
      </PageContainerBox>
    </>
  );
}

RegisterRoleSelectionPage.propTypes = {
  userId: propTypes.number.isRequired,
  email: propTypes.string,
  hashEmail: propTypes.string,
};

export default RegisterRoleSelectionPage;
