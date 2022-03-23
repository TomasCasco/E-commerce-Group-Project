import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import Nav from "../../components/Navbar/NavResponsive";

import { Terms } from "../../components/Support/Terms";

export default function Support() {
  const [index, setIndex] = useState(null);
  const [currentTermId, setCurrentTermId] = useState(null);
  return (
    <>
      <NavBar />
      <Nav />
      <Terms
        index={index}
        setIndex={setIndex}
        currentTermId={currentTermId}
        setCurrentTermId={setCurrentTermId}
      />
      <Footer />
    </>
  );
}
