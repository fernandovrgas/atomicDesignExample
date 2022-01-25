import { NextPage } from "next";
import { Footer } from "features/Footer";
import { Header } from "features/Header";

const Page: NextPage = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Page;
