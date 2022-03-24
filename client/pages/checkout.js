import NavBar from "../components/Navbar/NavBar";
import Checkout from "../components/Cart/Checkout";
import Nav from "../components/Navbar/NavResponsive";

export default function Home() {
  return (
    <>
      <NavBar />
      <Nav />
      <Checkout />
    </>
  );
}

export function getServerSideProps(context) {
  if (!context.req.headers.cookie.includes("token")) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return { props: {} };
  }
  return { props: {} };
}
