// Libs
import { useRouter } from "next/router";
import { Button, Col, Form, Input, PageHeader } from "antd";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import { useGenre } from "app/hooks/genre";

// Data Hook

function AppContentsGenreDetails() {
  const router = useRouter();

  //? ============== Genre Hook ============= ?//
  const { data, onEdit, loading } = useGenre({ singleId: router.query.id });
  // * ====================================== * //

  //? ============== Handle Update ============= ?//
  const [form] = Form.useForm();
  const handleUpdate = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        title: value.title,
      };
      const result = await onEdit(submission);
      if (result) {
        router.push("/dashboard/genre");
      }
    });
  };
  // * ====================================== * //

  return (
    <AppContainerBox>
      <Col span={12} style={{ margin: "0 auto" }}>
        <PageHeader title="Genre Details" onBack={() => router.back()} />
        <AppContainerCard>
          {data && (
            <Form layout="vertical" form={form} initialValues={data}>
              <Form.Item
                label="Genre Title"
                name="title"
                rules={[{ required: true, message: "Please input genre title!" }]}
              >
                <Input placeholder="Input genre title" />
              </Form.Item>
              <Col span={24} style={{ textAlign: "right" }}>
                <Button type="primary" onClick={handleUpdate} loading={loading}>
                  Save Changes
                </Button>
              </Col>
            </Form>
          )}
        </AppContainerCard>
      </Col>
    </AppContainerBox>
  );
}

export default AppContentsGenreDetails;
