import React, { Component } from "react";
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
          Your Cart - {this.props.cart.length} different product
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge className="bg-success text-white">
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
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