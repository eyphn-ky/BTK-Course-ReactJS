import "./App.css";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";

export default class App extends Component {
  changeCategory=(category)=>{this.setState({currentCategory:category.categoryName})}
  state={
    currentCategory:""
  }

  render() {//fonksiyon komponent kullansaydık tek fonksiyon bu olduğundan başka fonksiyon yazamazdık. Bu yüzden class componente çevirdik App'i
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    return (
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
          </Col>
        </Row>
      </Container>
    );
  }
}
