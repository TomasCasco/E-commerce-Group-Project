import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../../components/Card/cardContainer";
import NavBar from "../../components/Navbar/NavBar";
import {
  getAllProducts,
  resetSearch,
} from "../../redux/products/productsActions";

export default function Home({ filterName }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const filterQuery = {
      categories: filterName,
    };
    dispatch(getAllProducts(filterQuery));
    dispatch(resetSearch());
  }, [dispatch, filterName]);

  return (
    <>
      <NavBar />
      <CardContainer />
    </>
  );
}

Home.getInitialProps = (context) => {
  const { query } = context;
  const { filterName } = query;

  return { filterName };
};
