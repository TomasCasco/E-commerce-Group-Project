import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import { Faqs } from "../../components/Support/Faqs";

export default function Support() {
  const [index, setIndex] = useState(null);
  const [currentFaqId, setCurrentFaqId] = useState(null);
  return (
    <>
      <NavBar />
      <Faqs
        index={index}
        setIndex={setIndex}
        currentFaqId={currentFaqId}
        setCurrentFaqId={setCurrentFaqId}
      />
      <Footer />
    </>
  );
}
