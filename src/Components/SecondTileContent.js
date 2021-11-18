import React from 'react'
import { Card, Image, Button} from 'semantic-ui-react'

const SecondTileContent = ({titleDisplay2, imageDisplay2, desDisplay2, handleSecondCat, sucClick, secondCat, firstCat}) => {
  
    return (
            <div>
                {sucClick === false && <Card>
                <Card.Content style={{textAlign: "center", fontSize: "14pt", backgroundColor: "#e8a5af", fontFamily: "MyThirdFont", color: "#ffffff"}} >Choose Your Second Activity</Card.Content>
                <Button.Group widths='5'>
                    <Button onClick={handleSecondCat} className={firstCat === "Beer" || secondCat === "Beer" ? "ui disabled button":"ui button"} value="Beer">🍺</Button>
                    <Button className={firstCat === "Movies" || secondCat === "Movies" ? "ui disabled button" : "ui button" } onClick={handleSecondCat} value="Movies" >🎬</Button>
                    <Button className={firstCat === "Cocktails" || secondCat === "Cocktails" ? "ui disabled button" : "ui button" } onClick={handleSecondCat} value="Cocktails" >🍸</Button>
                    <Button className={firstCat === "Games" || secondCat === "Games" ? "ui disabled button" : "ui button" } onClick={handleSecondCat} value="Games" >🎲</Button>
                    <Button className={firstCat === "Eats"|| secondCat === "Eats"  ? "ui disabled button" : "ui button" } onClick={handleSecondCat} value="Eats" >🍔</Button>
                </Button.Group>
                </Card>}
                    {sucClick === true && <Card style={{fontSize: "10pt"}}> <Image style={{minHeight: "200px", maxWidth: "100%"}} src={imageDisplay2} />
                    <Card.Content>
                        <Card.Header style={{height: "25px"}} >{titleDisplay2}</Card.Header>
                        <Card.Description style={{height: "35px", overflow: "auto"}} >
                            {desDisplay2}
                        </Card.Description>
                    </Card.Content> 
                </Card>}
            </div>
    )
}

export default SecondTileContent