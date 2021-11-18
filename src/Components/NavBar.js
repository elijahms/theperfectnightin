import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Divider} from 'semantic-ui-react'
const NavBar = () => {
    
    
    const styleSet = {
        margin: "2%",
        width: "25%",
        color: "#e8a5af"
    }
    
    return (
        <div>
      <Container textAlign='center'>
        <NavLink style={styleSet} activeStyle={{
          color: "#f8cece"}} exact to="/">
            Home
        </NavLink>
        <NavLink style={styleSet} activeStyle={{
          color: "#f8cece"}} exact to="/addnew">
            Add New Eats
        </NavLink>
        <NavLink style={styleSet} activeStyle={{
          color: "#f8cece"}} exact to="/about">
            About Me
        </NavLink>
      </Container>
      <Divider style={{width: "50%", marginLeft: "25%"}} />
        </div>
    )
}

export default NavBar
