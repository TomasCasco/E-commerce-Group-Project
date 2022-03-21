import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../../components/Card/cardContainer";
import FilterBar from "../../components/FilterBar/filterBar";
import Footer from "../../components/Footer/Footer.tsx";
import NavBar from "../../components/Navbar/NavBar";
import { getAllProducts } from "../../redux/products/productsActions";

export default function Home({ brand, orderBy, sortBy }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const filterQuery = {
      brands: brand,
      orderBy:orderBy,
      sortBy:sortBy
    };
    dispatch(getAllProducts(filterQuery));
  }, [dispatch, brand,orderBy,sortBy]);


  return (
    <>
      <NavBar />
      <FilterBar brand={brand} sortBy={sortBy} orderBy={orderBy}/>
      <CardContainer />
      <Footer />
    </>
  );
}

Home.getInitialProps = (context) => {
  const { query } = context;
  const { brand, orderBy, sortBy } = query;

  return { brand, orderBy, sortBy };
};
