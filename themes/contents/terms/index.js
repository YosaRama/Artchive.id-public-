// Libs
import { Col } from "antd";
import Link from "next/link";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeadline from "themes/components/libs/headline";

// Styles
import s from "./index.module.scss";

function ThemesContentsTerms() {
  return (
    <>
      <ThemesContainerMain>
        <Col style={{ margin: "50px auto 30px" }}>
          <ThemesHeadline title="TERMS & CONDITIONS" subtitle="Last updated : [ 8 April 2022 ]" />
        </Col>
        <Col xl={{ span: 12 }} lg={{ span: 16 }} style={{ margin: "30px auto 60px" }}>
          <h3>General Term</h3>
          <p>
            By accessing and placing an order with, you confirm that you are in agreement with our
            bound by the terms of service contained in the Term & Condition outlined below. These
            terms apply to the entire website and any email or other type of communication between
            you and us.
          </p>
          <p>
            Under no circumstance shall team be liable for any direct, indirect, special, incidental
            or consequential damages, including, but no limited to, loss of data or profit, arising
            out the usem or the inability to use the materials on the site, even if team or an
            authorized representative has been advised of the possibility of such damages. If your
            use of materials from this site result in the need for servicing, repair or correction
            of equipment or data, you assume any cost thereof.
          </p>
          <p>
            Will not be responsible for any outcome that may occur during the course of usage of our
            resources. We serve the right to change prices and revise the resource usage policy at
            any moment.
          </p>
          <h3>License</h3>
          <p>
            Artchive.id grants you a revocable, non-exclusive, non-transferable, limited license to
            download, install and use our service strictly in accordance with the term of this
            Agreement
          </p>
          <p>
            {`
            These Terms & Conditions are a contract between you and Artchive.id (referred to in
            these terms & Conditions as “Artchive.id”, “us”, “we” or “our”, the provider of the
            Artchive.id website and the services accessible from the Artchive.id website (which are
            collectively referred to in these Terms & Conditions as the “Artchive.id Service”)
          `}
          </p>
          <p>
            You are agreeing to the bound by these Terms & Conditions. If you have any questions
            about these Terms & Conditions, please contact our team through info@artchive.id. In
            these Terms & Conditions, “you” refers both of you as an individual and to the entity
            you represent. If you violate any of these Terms & Conditions, we reserve the right to
            cancel your account or block access to your account without notice.
          </p>
          <h3>Definitions and key terms</h3>
          <p>For this Terms & Conditions :</p>
          <ul className={s.list}>
            <li>
              <strong>Cookie</strong>: small amount of data generate by a website and saved by your
              web browser. It is used to identify your browser, provide analytics, remember
              information about you such as your language preference or login information.
            </li>
            <li>
              <strong>Company</strong>: when this policy mentions “ Company”, “us”, “we” or “our”,
              it refers to Archive, Bali Indonesia that is responsible for your information under
              this Privacy Policy
            </li>
            <li>
              <strong>Country</strong>: where Artchive.id or the owner/founders of Archive are based
              in Indonesia
            </li>
            <li>
              <strong>Customer</strong>: refers to the company, organization or person that signs up
              to use Archive Service to manage the relationships with your consumer or service user
            </li>
            <li>
              <strong>Device</strong>: any internet connected device such as a phone, tablet,
              computer or any other device that can be used to visit Artchive.id and use the
              service.
            </li>
            <li>
              <strong>IP address</strong>
              {`
              : every device connected to the internet is assigned a
              number know as an Internet protocol (IP) address. These numbers are usually assigned
              in geographic block. An IP address can often be used to identify the location from
              which device is connecting to the Internet.
              `}
            </li>
            <li>
              <strong>Personnel</strong>: refers to those individuals who are employed by
              Artchive.id or are under contract to perform a service on behalf of one of the
              parties.
            </li>
            <li>
              <strong>Personal Data</strong>
              {`
              : any information that directly, indirectly or in connection with other
              information–including a personal identification number-allows for the identification
              or identifiability of a natural person.
              `}
            </li>
            <li>
              <strong>Website</strong>
              {`: Artchive.id’s site, which can be accessed via this URL:`}
              <Link href="/">
                <a> https://www.artchive.id</a>
              </Link>
            </li>
            <li>
              <strong>Artwork</strong>
              {`
              , 'artworks', 'work', 'works', means goods or property that may be bought or
              sold using Artchive.id's Service
            `}
            </li>
            <li>
              <strong>Listing</strong>
              means a listing on our Website through which you offer, negotiate, buy, sell or
              advertise any artwork.
            </li>
            <li>
              <strong>{"Seller"}</strong>
              or <strong>{"Vendor"}</strong>{" "}
              {`means an art gallery or art dealer selling artwork on
              the Artchive.id's website`}
              .
            </li>
          </ul>
          <h3>Payment</h3>
          <p>
            If you register to any of our recurring payment plans, you agree to pay all fees or
            charges to your account for the Service in accordance with the fees, charges and billing
            terms in effect at the time that each fee or charge is due and payable. Unless otherwise
            indicated in an order form, you must provide us with a valid credit card (Visa,
            MasterCard, or any other issuer accepted by us)
          </p>
          <p>
            {`
            ('Payment Provider') as a condition to signing up for the Premium plan. Your Payment
            Provider agreement governs your use of the designated credit card account, and you must
            refer to that agreement and not these Terms to determine your rights and liabilities
            with respect to your Payment Provider. By providing us with your credit card number and
            associated payment information, you agree that we are authorized to verify information
            immediately, and subsequently invoice your account for all fees and charges due and
            payable to us hereunder and that no additional notice or consent is required. You agree
            to immediately notify us of any change in your billing address or the credit card used
            for payment hereunder. We reserve the right at any time to change its prices and billing
            methods, either immediately upon posting on our Site or by e-mail delivery to your
            organization's administrator(s). Any attorney fees, court costs, or other costs incurred
            in collection of delinquent undisputed amounts shall be the responsibility of and paid
            for by you. No contract will exist between you and us for the Service until we accept
            your order by a confirmatory e-mail, SMS/MMS message, or other appropriate means of
            communication. You are responsible for any third-party fees that you may incur when
            using the Service
          `}
          </p>
          <h3>Limitation of Liability</h3>
          <p>
            {`
            Notwithstanding any damages that you might incur, the entire liability of us and any of
            our suppliers under any provision of this Agreement and your exclusive remedy for all of
            the foregoing shall be limited to the amount actually paid by you for the service. To
            the maximum extent permitted by applicable law, in no event shall we or our suppliers be
            liable for any special, incidental, indirect, or consequential damages whatsoever
            (including, but not limited to, damages for loss of profits, for loss of data or other
            information, for business interruption, for personal injury, for loss of privacy arising
            out of or in any way related to the use of or inability to use the service, third-party
            software android third-party hardware used with the service, or otherwise in connection
            with any provision of this Agreement), even if we or any supplier has been advised of
            the possibility of such damages and even if the remedy fails of its essential purpose.
            Some states/jurisdictions do not allow the exclusion or limitation of incidental or
            consequential damages, so the above limitation or exclusion may not apply to you.
          `}
          </p>
          <h3>Shipping </h3>
          <p>
            We will provide good service for shipping the artwork. We will ensure the artwork
            arrives at your place safely. All our unframed products are packed and shipped in sturdy
            poster tubes. Painters are obliged to send the painting to Artchive.id when the artwork
            has been sold. The process of sending paintings to buyers will be carried out by
            Artchive.id independently or using a third party for the purpose of managing insurance,
            packaging, labeling, and quality control. Users must send a complete residential address
            and billing account for payment. All data in Artchive.id is kept confidential.
          </p>
        </Col>
      </ThemesContainerMain>
    </>
  );
}

export default ThemesContentsTerms;
