import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../../components/Card/cardContainer";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import {
  getAllProducts,
} from "../../redux/products/productsActions";

export default function Home({ q }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const filterQuery = {
      name: q,
    };
    dispatch(getAllProducts(filterQuery));
  }, [dispatch, q]);

  return (
    <>
      <NavBar />
      <CardContainer searchValue={q}/>
      <Footer />
    </>
  );
}

Home.getInitialProps = (context) => {
  const { query } = context;
  const { q } = query;
  return { q };
};
