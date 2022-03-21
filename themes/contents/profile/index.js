// Libs
import propTypes from "prop-types";
import moment from "moment";
import { Col, DatePicker, Divider, Form, Image, Input, Row } from "antd";
import { signOut } from "next-auth/react";

// Data Hook
import { useUser } from "app/hooks/user";
import { useUploads } from "app/hooks/upload";

// Components
import AppUploadButton from "app/components/libs/upload-button";
import ThemesButton from "themes/components/libs/button";
import changeConfirmModal from "app/components/utils/change-modal-confirm";
import ThemesHeadline from "themes/components/libs/headline";

// Helper
import { passwordFormRules } from "app/helpers/passwordFormRules";

// Styles
import s from "./index.module.scss";

function ThemesContentsProfile(props) {
  const { userId } = props;

  //? ============== Handle Logout ============= ?//
  const handleLogout = () => {
    signOut();
  };
  // * ====================================== * //

  //? ============== User Hook ============= ?//
  const {
    data: userData,
    loading: userDataLoading,
    onEditInfo,
    onEditProfileImage,
    onEditPassword,
    onEditBannerImage,
  } = useUser({ singleId: userId });

  // Initial User Data
  const initialUserData = userData && {
    ...userData,
    birth_date: userData?.birth_date ? moment(userData?.birth_date) : null,
  };
  // * ====================================== * //

  //? ============== Handle Upload Image ============= ?//
  const { onUpload, loading: uploadLoading } = useUploads();

  // Handle Change Profile Image
  const handleChangeProfile = async (file) => {
    const upload = await onUpload({ file: file.file, userId: userId });
    if (upload.success) {
      const result = await onEditProfileImage({ profileId: upload.data.id });
    }
  };

  // Handle Change Banner Image
  const handleChangeBanner = async (file) => {
    const upload = await onUpload({ file: file.file, userId: userId });
    if (upload.success) {
      const result = await onEditBannerImage({ bannerId: upload.data.id });
    }
  };
  // * ====================================== * //

  //? ============== Handle General Information Submission ============= ?//
  const [generalForm] = Form.useForm();
  const handleEditGeneralInfo = () => {
    generalForm.validateFields().then(async (value) => {
      const submission = {
        fullName: value.full_name,
        email: value.email,
        city: value.city,
        birthDate: moment(value.birth_date).format(),
        biography: value.biography,
        address: value.address,
      };
      const result = await onEditInfo(submission);
    });
  };
  // * ====================================== * //

  //? ============== Handle Change Password ============= ?//
  const [passwordForm] = Form.useForm();
  const handleChangePassword = () => {
    passwordForm.validateFields().then(async (value) => {
      const submission = {
        password: value.password,
      };
      const result = await onEditPassword(submission);
    });
  };
  // * ====================================== * //

  return (
    <>
      <Col span={22} className={s.contentContainer}>
        <section>
          <div className={s.title}>
            <ThemesHeadline title="PROFILE" subtitle={`Edit your profile information`} />
          </div>
          <Divider className={s.divider} />
        </section>

        {/* BANNER SECTION */}
        <section className={s.bannerSection}>
          <Col span={24} className={s.profileBanner}>
            <Image
              src={
                userData?.banner?.url
                  ? `${process.env.NEXT_PUBLIC_S3_URL}/${userData?.banner.url}`
                  : "/images/default-images.jpg"
              }
              alt=""
              preview={false}
            />
          </Col>
          <Col span={24} style={{ textAlign: "right" }}>
            <AppUploadButton onUpload={handleChangeBanner} loading={uploadLoading}>
              Change Banner Profile
            </AppUploadButton>
          </Col>
        </section>
        {/* ========================== */}

        <section>
          <Row gutter={[32, 0]}>
            {/* PROFILE IMAGE SECTION */}
            <Col lg={{ span: 8 }} xs={{ span: 24 }} className={s.profileImage}>
              <Col span={24}>
                <Image
                  src={
                    userData?.profile?.url
                      ? `${process.env.NEXT_PUBLIC_S3_URL}/${userData?.profile.url}`
                      : "/images/profile-default.png"
                  }
                  alt=""
                />
              </Col>
              <Col span={24}>
                <AppUploadButton onUpload={handleChangeProfile} loading={uploadLoading}>
                  Change Profile Image
                </AppUploadButton>
              </Col>
            </Col>
            {/* ========================== */}

            {/* FORM SECTION */}
            {initialUserData && (
              <Col lg={{ span: 16 }} xs={{ span: 24 }}>
                <h1 className={s.formTitle}>General Information</h1>
                <Divider className={`${s.divider} ${s.insideForm}`} />

                <Form
                  form={generalForm}
                  layout="vertical"
                  initialValues={initialUserData}
                  className={s.formContainer}
                >
                  <Form.Item label="Full Name" name="full_name">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Email" name="email" hidden>
                    <Input disabled />
                  </Form.Item>
                  <Form.Item label="Birthday" name="birth_date">
                    <DatePicker format={"DD MMMM YYYY"} style={{ width: "50%" }} />
                  </Form.Item>
                  <Form.Item label="Bio" name="biography">
                    <Input.TextArea autoSize={{ maxRows: 5, minRows: 3 }} />
                  </Form.Item>

                  <h1 className={s.formTitle}>Address Information</h1>
                  <Divider className={`${s.divider} ${s.insideForm}`} />

                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Address" name="address">
                    <Input />
                  </Form.Item>
                  <ThemesButton
                    type="default"
                    onClick={() =>
                      changeConfirmModal({
                        title: "information",
                        onConfirm: handleEditGeneralInfo,
                      })
                    }
                    loading={userDataLoading}
                  >
                    SAVE CHANGES
                  </ThemesButton>
                </Form>

                <h1 className={s.formTitle}>Change Password</h1>
                <Divider className={`${s.divider} ${s.insideForm}`} />

                <Form layout="vertical" form={passwordForm}>
                  <Form.Item
                    name="password"
                    label="New Password"
                    rules={[passwordFormRules]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    name="confirm_password"
                    label="Confirmation Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      { required: true, message: "Please re-type new password!" },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            new Error("The two passwords that you entered do not match!")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <ThemesButton
                    type="default"
                    onClick={() =>
                      changeConfirmModal({ title: "password", onConfirm: handleChangePassword })
                    }
                    loading={userDataLoading}
                  >
                    CHANGE PASSWORD
                  </ThemesButton>
                </Form>
              </Col>
            )}

            {/* ========================== */}
          </Row>
        </section>

        <section className={s.logoutBtnContainer}>
          <ThemesButton type={"outlined"} onClick={handleLogout}>
            LOGOUT
          </ThemesButton>
        </section>
      </Col>
    </>
  );
}

ThemesContentsProfile.propTypes = {
  userId: propTypes.number,
};

export default ThemesContentsProfile;
