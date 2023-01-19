// Contents

import ThemesContentsNotification from "themes/contents/notification";

function PageNotification() {
  return <ThemesContentsNotification />;
}

export default PageNotification;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
