import dynamic from "next/dynamic";
import { createSwaggerSpec } from "next-swagger-doc";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

function ApiDocPage(props) {
  const { record } = props;
  return <SwaggerUI spec={record} />;
}

export default ApiDocPage;

export const getStaticProps = async (ctx) => {
  const record = createSwaggerSpec({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Artchive.id API Documentation",
        version: "1.0.0",
      },
    },
  });

  return {
    props: {
      record,
    },
  };
};
