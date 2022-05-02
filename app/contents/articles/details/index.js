// Libs
import { PageHeader } from "antd";

// Components
import AppContainerBox from "app/components/container/box";
import AppContainerCard from "app/components/container/card";
import AppFormArticles from "app/components/libs/form-articles";

// Data Hook
import { useArticle } from "app/hooks/articles";
import { useRouter } from "next/router";

function AppContentsArticlesDetails() {
  const router = useRouter();

  //? ============== Article Hook ============= ?//
  const { data: articleData, onEdit } = useArticle({ singleId: router.query.id });
  // * ====================================== * //

  return (
    <>
      <AppContainerBox>
        <PageHeader />
        <AppContainerCard>
          {articleData && (
            <AppFormArticles initialData={articleData} isEdit={true} onSubmit={onEdit} />
          )}
        </AppContainerCard>
      </AppContainerBox>
    </>
  );
}

export default AppContentsArticlesDetails;
