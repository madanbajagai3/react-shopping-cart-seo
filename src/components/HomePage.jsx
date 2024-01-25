import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Products from "./Products";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta
          name="description"
          content="This is the homepage of shopping cart"
        />
        <meta name="keywords" content="HTML, CSS, JavaScript, e-commerce" />
        <meta name="author" content="Madan Bazgai" />
      </Helmet>
      <Header />
      <Products />
    </>
  );
};

export default HomePage;
