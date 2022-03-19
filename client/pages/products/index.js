import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../../components/Card/cardContainer";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import NavResponsive from "../../components/Navbar/NavResponsive.js";
import { getAllProducts } from "../../redux/products/productsActions";

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
      <NavResponsive />
      <CardContainer />
      <Footer />
    </>
  );
}

Home.getInitialProps = (context) => {
  const { query } = context;
  const { category, orderBy, sortBy } = query;
  return { category, orderBy, sortBy };
};
