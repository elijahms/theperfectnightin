import React from 'react'
import { Card, Image, Button} from 'semantic-ui-react'

const TileContent = ({ titleDisplay1, imageDisplay1, desDisplay1, handleFirstCat, sucClick, firstCat, secondCat}) => {
    
    return (
            <div>
                {sucClick === false && <Card>
                <Card.Content style={{textAlign: "center", fontSize: "14pt", backgroundColor: "#e8a5af", fontFamily: "MyThirdFont", color: "#ffffff"}} >Choose Your First Activity</Card.Content>
                <Button.Group widths='5'>
                    <Button onClick={handleFirstCat} className={firstCat === "Beer" || secondCat === "Beer" ? "ui disabled button":"ui button"} value="Beer">🍺</Button>
                    <Button className={firstCat === "Movies" || secondCat === "Movies" ? "ui disabled button" : "ui button" } onClick={handleFirstCat} value="Movies" >🎬</Button>
                    <Button className={firstCat === "Cocktails" || secondCat === "Cocktails" ? "ui disabled button" : "ui button" } onClick={handleFirstCat} value="Cocktails" >🍸</Button>
                    <Button className={firstCat === "Games" || secondCat === "Games" ? "ui disabled button" : "ui button" } onClick={handleFirstCat} value="Games" >🎲</Button>
                    <Button className={firstCat === "Eats"|| secondCat === "Eats"  ? "ui disabled button" : "ui button" } onClick={handleFirstCat} value="Eats" >🍔</Button>
                </Button.Group>
                </Card>}
                    {sucClick === true  && <Card style={{fontSize: "10pt", textAlign: "center"}} > <Image style={{minHeight: "200px", maxWidth: "100%"}} src={imageDisplay1} />
                    <Card.Content>
                    <Card.Header style={{height: "25px"}} >{titleDisplay1}</Card.Header>
                    <Card.Description style={{height: "35px", overflow: "auto"}} >
                        {desDisplay1}
                    </Card.Description>
                    </Card.Content>
                </Card>}
            </div>
    )
}



export default TileContent
