// Libs
import { Button, Col, Form, Input, PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";

// Data Hook
import { useGenres } from "dashboard/hooks/genre";
import { stringCapitalize } from "dashboard/helpers/capitalize";

// Helper

function AppContentsGenreCreate() {
  const router = useRouter();

  //? ============== Genres Hook ============= ?//
  const { onAdd, loading } = useGenres({ queryString: "" });
  // * ====================================== * //

  //? ============== Handling Submit ============= ?//
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then(async (value) => {
      const submission = {
        title: stringCapitalize(value.title),
      };
      const result = await onAdd(submission);
      if (result) {
        router.push("/dashboard/genre");
      }
    });
  };
  // * ====================================== * //

  return (
    <AppContainerBox>
      <Col span={12} style={{ margin: "0 auto" }}>
        <PageHeader title="Add New Genre" onBack={() => router.back()} />
        <AppContainerCard>
          <Form layout="vertical" form={form}>
            <Form.Item
              label="Genre Title"
              name="title"
              rules={[{ required: true, message: "Please input genre title!" }]}
            >
              <Input placeholder="Input genre title" />
            </Form.Item>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary" onClick={handleSubmit} loading={loading}>
                Submit
              </Button>
            </Col>
          </Form>
        </AppContainerCard>
      </Col>
    </AppContainerBox>
  );
}

export default AppContentsGenreCreate;
