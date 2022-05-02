// Libs
import { PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppFormArticles from "app/components/libs/form-articles";

function AppContentsArticleCreate() {
  const router = useRouter();
  return (
    <>
      <AppContainerBox>
        <PageHeader onBack={() => router.back} title="Create New Articles" />
        <AppContainerCard>
          <AppFormArticles />
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsArticleCreate;
