import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../../components/Card/cardContainer";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import {
  getAllProducts,
} from "../../redux/products/productsActions";

export default function Home({ brand }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const filterQuery = {
      brands: brand,
    };
    dispatch(getAllProducts(filterQuery));
  }, [dispatch, brand]);

  return (
    <>
      <NavBar />
      <CardContainer />
      <Footer/>
    </>
  );
}

Home.getInitialProps = (context) => {
  const { query } = context;
  const { brand } = query;

  return { brand };
};
