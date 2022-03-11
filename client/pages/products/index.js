import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../../components/Card/cardContainer";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import {
  getAllProducts, getProductById,
} from "../../redux/products/productsActions";


export default function Home({ category }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const filterQuery = {
      categories: category,
    };
      dispatch(getAllProducts(filterQuery));
  }, [dispatch, category]);

  return (
    <>
      <NavBar />
      <CardContainer />
      <Footer />
    </>
  );
}

Home.getInitialProps = (context) => {
  const { query } = context;
  const { category } = query;
  return { category };
};
