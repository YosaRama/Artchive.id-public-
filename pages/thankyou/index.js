import ThemesThankyou from "themes/contents/thankyou";

function PageThankyou() {
  return <ThemesThankyou />;
}

export default PageThankyou;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
