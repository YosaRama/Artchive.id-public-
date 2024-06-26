// Libs
import { PageHeader } from "antd";
import { useRouter } from "next/router";

// Components
import AppContainerBox from "dashboard/components/container/box";
import AppContainerCard from "dashboard/components/container/card";
import AppFormArticles from "dashboard/components/libs/form-articles";

// Data Hook
import { useArticles } from "dashboard/hooks/articles";

function AppContentsArticleCreate() {
  const router = useRouter();

  //? ============== Articles Hook ============= ?//
  const { onAdd: addArticles } = useArticles({ queryString: "" });
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <PageHeader onBack={() => router.back} title="Create New Articles" />
        <AppContainerCard>
          <AppFormArticles onSubmit={addArticles} />
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsArticleCreate;
