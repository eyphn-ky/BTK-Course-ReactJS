import "./App.css";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Row, Col, Container, Form } from "reactstrap";
import React, { Component } from "react";
import alertify from "alertifyjs";

import { Routes, Route, Link } from "react-router-dom";
import { NotFound } from "./NotFound";
import { CartList } from "./CartList";

export default class App extends Component {
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id); //kategori komponentinde zaten tetikleniyor dolayısıyla tetikledikten sonra ürünleride getir sana zahmet
  };
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    categoryId ? (url += "?categoryId=" + categoryId) : (url += ""); //seoUrl is defined ise if'in içine koyunca bu anlama gelir

    fetch(url) //fetch => javascriptten gelir promise döner
      .then((response) => response.json()) //apiden geleni jsona çevirdik
      .then((data) => this.setState({ products: data }));
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    addedItem
      ? (addedItem.quantity += 1)
      : newCart.push({ product: product, quantity: 1 });
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added!");
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.warning(product.productName + " removed!");
  };

  render() {
    //fonksiyon komponent kullansaydık tek fonksiyon bu olduğundan başka fonksiyon yazamazdık. Bu yüzden class componente çevirdik App'i
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    return (
      <Container>
        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <Row>
          <Col xs="3">
            <CategoryList
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo}
            />
          </Col>
          <Col xs="9">
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList
                    addToCart={this.addToCart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                  />
                }
              />
              <Route
                path="/product"
                element={
                  <ProductList
                    addToCart={this.addToCart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                  />
                }
              />
              <Route path="/cart" element={<CartList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    );
  }
}
