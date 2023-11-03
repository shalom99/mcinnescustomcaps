import { FC } from "react";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
  return (
    <div className="lg:h-screen bg-gray-600 flex justify-center pt-10 pb-10 lg:pt-32">
      <div id="container" className="w-full lg:w-[800px] text-white px-4">
        <h1 className="text-center text-activeOrange text-3xl font-bold mb-10">
          Privacy Policy
        </h1>

        <p className="">
          <span className="font-bold"> McInnes Custom Caps </span>
          agrees that the ‘National Privacy Principles for the Fair Handling of
          Personal Information’ is an integral part of the way we do business.
          This Principle has guidelines and standards for the collection,
          access, storage and use of personal information which we obtain in
          order to run our business and meet customer needs. We are respectful
          of our customer’s right to privacy and in this regard will only use
          the personal information in relation to our customers in a way that is
          agreed in the National Privacy Principles. Information in regard to
          what personal information we collect about and from you and the way we
          handle and what we do with this personal information As a part of our
          customer service and accounting needs we may need to ask for personal
          details such as your name, business name and ABN or ACN, mailing and
          physical address, telephone number/s and e-mail address. We need this
          information to generate tax invoices, dispatch or mail
          accounts/orders/goods to you, send electronic messages to you
          (accounts/newsletters/promotions) and call you in regard to deliveries
          and accounts. The Privacy law requires us to collect personal
          information about you only from you if it is reasonable and practical
          to do so. You can decline to give information if it is not relevant to
          your business with us but we still need to comply with the taxation
          laws in regard to our business operations so some information will be
          necessary in order to do this. We take care and have security measures
          in place so that your personal information is protected from
          unauthorized access or handling of your information. In regard to
          financial transactions any information relayed by you is not stored
          but only used in relation to the immediate authorised transaction. We
          do not disclosure your personal information to other organisations
          (for example market researchers, and others). At your request we can
          provide account information for credit reference purposes (This
          authority will be required from you in writing) On request we will
          provide you with access and also change any of your personal
          information we hold (except in the limited circumstances recognised by
          privacy law). In this case we will ask questions and request a signed
          form from you to ensure that we are providing this information to the
          concerned party only. More information about Privacy law and the
          National Privacy Principles is available from the Federal Privacy
          Commissioner at 
          <a href="https://www.oaic.gov.au" className="hover:text-activeOrange" target="_blank">    https://www.oaic.gov.au</a>

        </p>
      </div>
    </div>
  );
};

export default page;
