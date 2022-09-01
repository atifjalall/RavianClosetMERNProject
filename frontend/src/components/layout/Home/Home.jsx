import React, { Fragment, useEffect } from "react";
import { BsMouse3 } from "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
import "./Home.css";
//import Logo from "../../../images/logoo.png";
import Product from "./ProductCard";
import MetaData from "../MetaData";
import { clearErrors, getProduct } from "../../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import Banner from "../BBanner/Banner";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Ravian Closet - Shop Now" />

          <div className="banner">
            {/* <p><img src={Logo} alt="" width={"200px"} /></p> */}
            {/* <h1>FIND MAZING PRODUCTS BELOW</h1> */}

            <a href="#container">
              <Banner />

              <button class="glow-on-hover">
                <BsChevronCompactDown size={35} />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
};

export default Home;
