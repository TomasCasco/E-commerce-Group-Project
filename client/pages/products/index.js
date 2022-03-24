import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../../components/Card/cardContainer";
import FilterBar from "../../components/FilterBar/filterBar";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import Nav from "../../components/Navbar/NavResponsive.js";
import { getAllProducts } from "../../redux/products/productsActions";
import Popup from "../../components/Chat/Popup/Popup";

export default function Home({ category, orderBy, sortBy }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const filterQuery = {
      categories: category,
      orderBy: orderBy,
      sortBy: sortBy,
    };
    dispatch(getAllProducts(filterQuery));
  }, [dispatch, category, orderBy, sortBy]);

  return (
    <>
      <NavBar />
      <Nav />
      <FilterBar category={category} sortBy={sortBy} orderBy={orderBy} />
      <CardContainer />
      <Footer />
      <Flex position="fixed" bottom="5" right="-10">
        <Popup />
      </Flex>
    </>
  );
}

Home.getInitialProps = (context) => {
  const { query } = context;
  const { category, orderBy, sortBy } = query;
  return { category, orderBy, sortBy };
};
