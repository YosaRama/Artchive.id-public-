// Libs
import { Button, Col, Form, Input, PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";

// Data Hook
import { useGenres } from "app/hooks/genre";

function GenreCreate() {
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
    <ContainerBox>
      <Col span={12} style={{ margin: "0 auto" }}>
        <PageHeader title="Add New Genre" onBack={() => router.back()} />
        <ContainerCard>
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
        </ContainerCard>
      </Col>
    </ContainerBox>
  );
}

export default GenreCreate;
