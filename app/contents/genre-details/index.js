// Libs
import { useRouter } from "next/router";
import { Button, Col, Form, Input, PageHeader } from "antd";

// Components
import ContainerBox from "app/components/container/containerBox";
import ContainerCard from "app/components/container/containerCard";
import { useGenre } from "app/hooks/genre";

// Data Hook

function GenreDetails() {
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
    <ContainerBox>
      <Col span={12} style={{ margin: "0 auto" }}>
        <PageHeader title="Genre Details" onBack={() => router.back()} />
        <ContainerCard>
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
        </ContainerCard>
      </Col>
    </ContainerBox>
  );
}

export default GenreDetails;
