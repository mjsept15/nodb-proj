import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
     } from 'reactstrap';
    
    class NavBar extends  Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: true
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
    render(){
        return (
            <div style = {{backgroundColor:'silver'}}>
          <Navbar color="" light expand="md">
          <NavbarBrand href="/">GYM WORKOUT SEARCH</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
   
            </Nav>
          </Collapse>
        </Navbar>
            </div>
        )
    }
}
export default NavBar