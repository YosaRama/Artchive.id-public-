// Libs
import propTypes from "prop-types";
import { Col, Form, Radio, Row } from "antd";
import { useRouter } from "next/router";

// Data Hook
import { useUser } from "app/hooks/user";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesRadioWithImage from "themes/components/libs/radio-with-image";

// Styles
import s from "./index.module.scss";

function ThemesContentsRegisterRoleSelection(props) {
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
      <ThemesContainerMain sectionclass={s.section} containerClass={s.container}>
        <Col lg={{ span: 12 }} xs={{ span: 18 }}>
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
                    <Col lg={{ span: 8 }} xs={{ span: 24 }} className={s.roleOption}>
                      <ThemesRadioWithImage
                        value="ARTIST"
                        imgSrc="/images/frontpage-artist-icon.png"
                      >
                        Artist
                      </ThemesRadioWithImage>
                    </Col>
                    <Col lg={{ span: 8 }} xs={{ span: 24 }} className={s.roleOption}>
                      <ThemesRadioWithImage
                        value="COLLECTOR"
                        imgSrc="/images/frontpage-collector-icon.png"
                      >
                        Collector
                      </ThemesRadioWithImage>
                    </Col>
                    <Col lg={{ span: 8 }} xs={{ span: 24 }} className={s.roleOption}>
                      <ThemesRadioWithImage
                        value="GALLERY"
                        imgSrc="/images/frontpage-gallery-icon.png"
                      >
                        Gallery
                      </ThemesRadioWithImage>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
            </Form>
          </Col>
          <Col span={24} style={{ margin: "30px 0" }}>
            <ThemesButton onClick={handleEdit} type={"default " + s.selectBtn}>
              SELECT ROLE
            </ThemesButton>
          </Col>
        </Col>
      </ThemesContainerMain>
    </>
  );
}

ThemesContentsRegisterRoleSelection.propTypes = {
  userId: propTypes.number.isRequired,
  email: propTypes.string,
  hashEmail: propTypes.string,
};

export default ThemesContentsRegisterRoleSelection;
