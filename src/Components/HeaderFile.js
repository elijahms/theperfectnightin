import React from 'react'
import { Header } from 'semantic-ui-react';

const HeaderFile = () => {
    
    const styleSet = {
        paddingTop: "3%",
        paddingBottom: "1%",
        textAlign: "center",
        fontSize: 100,
        letterSpacing: "10px",
        color: "#cc2d30",
        //backgroundColor: "#e8a5af",
        background: "linear-gradient(#e8a5af, rgba(155,219,193, 0.4)",
        fontFamily: "RemarcleFont",
        textShadow: ".1em .1em 0 white"
    }
     
    return (
        <div>
        <Header style={styleSet} >MATCH IT</Header>
        <h2 style={{fontSize: "30", textAlign: "center", paddingBottom: "3%", color: "#cc2d30", fontFamily: "MyThirdFont"}} >A Perfect Night Starts With A Perfect MATCH</h2>
        </div>
    )
}

export default HeaderFile
