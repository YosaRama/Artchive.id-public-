// Contents
import ThemesContentsMaintenance from "themes/contents/maintenance";

function PageMaintenance() {
  return <ThemesContentsMaintenance />;
}

export default PageMaintenance;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
