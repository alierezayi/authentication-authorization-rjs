import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import Modal from "../components/modules/Modal";

function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="my-5 px-2">{children}</main>
      <Footer />
      <Toaster />
      <Modal />
    </>
  );
}

export default RootLayout;
