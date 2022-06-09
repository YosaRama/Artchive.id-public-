import { usePaymentHistories } from "app/hooks/payment-history";
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";

function PagePayment() {
  const { onTransaction } = usePaymentHistories({ queryString: "" });

  return (
    <>
      <ThemesContainerMain>
        <ThemesButton onClick={() => onTransaction({})}>Pay Now</ThemesButton>
      </ThemesContainerMain>
    </>
  );
}

export default PagePayment;
