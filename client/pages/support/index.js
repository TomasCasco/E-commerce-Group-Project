import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.tsx";

import NavBar from "../../components/Navbar/NavBar";
import Nav from "../../components/Navbar/NavResponsive";
import ContactUsForm from "../../components/Support/ContactUs";
import { Faqs } from "../../components/Support/Faqs";
import { Terms } from "../../components/Support/Terms";

export default function Support() {
  const [index, setIndex] = useState(null);
  const [currentFaqId, setCurrentFaqId] = useState(null);
  const [currentTermId, setCurrentTermId] = useState(null);
  return (
    <>
      <NavBar />
      <Nav />
      <Faqs
        index={index}
        setIndex={setIndex}
        currentFaqId={currentFaqId}
        setCurrentFaqId={setCurrentFaqId}
      />
      <ContactUsForm />
      <Footer />
    </>
  );
}
