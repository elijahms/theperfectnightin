import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Divider } from 'semantic-ui-react'
const NavBar = () => {
    return (
        <div>
      <Container textAlign='center'>
        <NavLink style={{ marginRight: "10px" }} to="/">
            Home
        </NavLink>
        <NavLink style={{ marginRight: "10px" }} to="/addnew">
            Add New Options
        </NavLink>
        <NavLink style={{ marginRight: "10px" }} to="/about">
            About Us
        </NavLink>
      </Container>
      <Divider />
        </div>
    )
}

export default NavBar
