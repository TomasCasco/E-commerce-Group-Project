import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../../components/Card/cardContainer";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import {
  getAllProducts,
  getAllBrands,
  resetSearch,
} from "../../redux/products/productsActions";

export default function Home({ filterBrand }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const filterQuery = {
      brands: filterBrand,
    };
    dispatch(getAllProducts(filterQuery));
    dispatch(resetSearch());
  }, [dispatch, filterBrand]);

  return (
    <>
      <Head>
        <title>Gamerland</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <CardContainer />
      <Footer/>
    </>
  );
}

Home.getInitialProps = (context) => {
  const { query } = context;
  const { filterBrand } = query;

  return { filterBrand };
};
