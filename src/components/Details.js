import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
              id,
              img,
              info,
              price,
              title,
              inCart
            } = value.detailProduct; 
          return (
            <div className="container py-5">
            {/* title */}
            <div className="row">
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
              <h1>{title}</h1>
            </div>   
            </div>
            {/* end title */}
            {/* product info*/}
            <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img src={img} className="img-fluid" alt="product"/>
            </div>
            {/* product text */}
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            {/* descript is example change for category or whatever is required */}
            <h1>descript : {title}</h1> 
              
            {/* end descript*/}
            <h4 className="text-blue">
            <strong>
              price : <span>£</span>
              {price}
            </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
             Some info about product: 
            </p>
            <p className="text-muted-lead">{info}</p>
            {/* buttons */}
            <div>
              <Link to="/">
                <ButtonContainer>
                    back to products
                </ButtonContainer>
              </Link>  
              <ButtonContainer 
              cart
              disabled={inCart ? true : false}
              onClick={() => {
              value.addToCart(id);
              value.openModal(id);
              }}
              >
                {inCart ? "inCart" : "add to cart"}   
              </ButtonContainer>
            {/* end buttons */}
            {/* end product text */}
            {/* end product info*/}
            </div>
            </div> 
            </div> 
            </div>  
          );
        }}
      </ProductConsumer>
    );
  }
}
