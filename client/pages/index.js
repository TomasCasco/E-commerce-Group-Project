import Head from "next/head";
import CaptionCarousel from "../components/Banner/banner.tsx";
import NavBar from "../components/Navbar/NavBar";
import CardContainer from "../components/Card/cardContainer";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
} from "../redux/products/productsActions";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <NavBar />
      <CaptionCarousel />
      <CardContainer />
    </>
  );
}
