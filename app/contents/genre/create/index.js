// Libs
import { Button, Col, Form, Input, PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";

// Data Hook
import { useGenres } from "app/hooks/genre";

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
        title: value.title,
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
