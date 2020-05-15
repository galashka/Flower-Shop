import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-1"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="mb-0 font-size-8" disabled>
                      ADDED
                    </p>
                  ) : (
                    <i className="fas fa-plus"/>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="font-bold mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }),
};

const ProductWrapper = styled.div`
  .card {
    display: flex;
    border-color: none;
    }

  .card-footer {
    background: transparent;
    border-top: transparent;
    }

  &:hover {
    .card {
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition : all 3s linear;
  }
  
  .img-container: hover  .card-img-top {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)
  }

  .cart-btn {
    display: flex;
    position: absolute;
    bottom: 10px;
    right: 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 3rem;
    opacity: 50%;
    // transform: translate(50%, 100%);
    // transition : all 1s linear;
  }
  }

  .img-container: hover .cart-btn {
    transform: translate(0, 0);
  }
  
  .cart-btn: hover {
    cursor: pointer;
  }
`;
