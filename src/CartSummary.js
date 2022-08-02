import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.length} product
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge className="bg-danger color-white" onClick={()=>this.props.removeFromCart(cartItem.product)}> X </Badge>
              {cartItem.product.productName}
              <Badge className="bg-success text-white">
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart-list">Go to cart detail</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart(){
    return(<NavItem>
        <NavLink>EmptyCart</NavLink>
    </NavItem>);
  }
  render() {
    return <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
    </div>;
    }
}