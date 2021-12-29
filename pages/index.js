// Libs
import Image from "next/image";

// Component
import Homepage from "themes/contents/homepage";

function PageHomepage() {
  return (
    <>
      <Homepage />
      <Image src={"/images/certificate-border.png"} width={100} height={100} alt="" />
      <Image src={"/images/certificate-title.png"} width={100} height={100} alt="" />
    </>
  );
}

export default PageHomepage;
