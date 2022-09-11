import ThemesCheckoutThankYou from "themes/contents/checkout/thank-you";

function PageCheckoutThankYou() {
  return <ThemesCheckoutThankYou />;
}

export default PageCheckoutThankYou;

export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
