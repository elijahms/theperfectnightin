import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonMatch = ({handleButtonChoices}) => {
    
    const styleSet = {
        width: "23%",
        marginLeft: "17%",
        marginTop: "2%",
        marginBottom: "5%",
    }
    
    return (
            <Button.Group style={styleSet} widths='5'>
                <Button onClick={handleButtonChoices} value="Beer" >🍺</Button>
                <Button onClick={handleButtonChoices} value="Movies" >🎬</Button>
                <Button onClick={handleButtonChoices} value="Cocktails" >🍸</Button>
                <Button onClick={handleButtonChoices} value="Games" >🎲</Button>
                <Button onClick={handleButtonChoices} value="Eats" >🍔</Button>
            </Button.Group>
    )
}

export default ButtonMatch
