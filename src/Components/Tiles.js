import React, {useContext} from 'react'
import { Grid, Button} from 'semantic-ui-react'
import TileContent from './TileContent'
import SecondTileContent from './SecondTileContent'
import Output from './Output'
import { FetchContext } from '../Context/context'


const Tiles = () => {

    const {movieGen, gameGen, drinkGen, beerGen, eatsGen , sucClick, setSucClick, afterClick, setAfterClick, imageDisplay1, setImageDisplay1, titleDisplay1, setTitleDisplay1, firstCat, setFirstCat, desDisplay1, setDesDisplay1, imageDisplay2, setImageDisplay2, titleDisplay2, setTitleDisplay2, secondCat, setSecondCat, desDisplay2, setDesDisplay2} = useContext(FetchContext)
    
    const styleSet = {
        display: "inline-grid",
        justifyContent: "center",
        alignItems: "center"
    }
    //enables the game title to be displayed correctly
    const titleCase = (str) => {
        let splitStr = str.split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     }

    function handleFirstCat(e) {
        setFirstCat(e.target.value)
     }

    function handleSecondCat(e) {
        setSecondCat(e.target.value)
    }

    function handleButtonChoices1(cat) {
        if (cat === "Movies") {
            setImageDisplay1(movieGen.Poster)
            setTitleDisplay1(movieGen.Title)
            setDesDisplay1(movieGen.Plot)
        } else if (cat === "Cocktails") {
            setImageDisplay1(drinkGen.strDrinkThumb)
            setTitleDisplay1(drinkGen.strDrink)
            setDesDisplay1('')
        } else if (cat === "Beer") {
            setImageDisplay1("https://static01.nyt.com/images/2021/05/26/dining/26pour2/20pour2-mediumSquareAt3X.jpg")
            setTitleDisplay1(beerGen.name)
            setDesDisplay1(beerGen.description)
        } else if (cat === "Games") {
            let gameNum = Math.floor(Math.random() * 100)
            setImageDisplay1(gameGen[gameNum].image_url)
            const gameNameNew = gameGen[gameNum].handle;
            const gameNameNewRemove = gameNameNew.replace(/-/g, " ");
            setTitleDisplay1(titleCase(gameNameNewRemove))
            setDesDisplay1(gameGen[gameNum].description_preview)
        } else if (cat === "Eats"){
            let eatNum = Math.floor(Math.random() * eatsGen.length)
            setImageDisplay1(eatsGen[eatNum].image)
            setTitleDisplay1(eatsGen[eatNum].name)
        }
    }

    function handleButtonChoices2(cat) {
        if (cat === "Movies") {
            setImageDisplay2(movieGen.Poster)
            setTitleDisplay2(movieGen.Title)
            setDesDisplay2(movieGen.Plot)
        } else if (cat === "Cocktails") {
            setImageDisplay2(drinkGen.strDrinkThumb)
            setTitleDisplay2(drinkGen.strDrink)
            setDesDisplay2('')
        } else if (cat === "Beer") {
            setImageDisplay2("https://static01.nyt.com/images/2021/05/26/dining/26pour2/20pour2-mediumSquareAt3X.jpg")
            setTitleDisplay2(beerGen.name)
            setDesDisplay2(beerGen.description)
        } else if (cat === "Games") {
            let gameNum = Math.floor(Math.random() * 100)
            setImageDisplay2(gameGen[gameNum].image_url)
            const gameNameNew = gameGen[gameNum].handle;
            const gameNameNewRemove = gameNameNew.replace(/-/g, " ");
            setTitleDisplay2(titleCase(gameNameNewRemove))
            setDesDisplay2(gameGen[gameNum].description_preview)
        } else if (cat === "Eats"){
            let eatNum = Math.floor(Math.random() * eatsGen.length)
            setImageDisplay2(eatsGen[eatNum].image)
            setTitleDisplay2(eatsGen[eatNum].name)
        }
    }

    function handleMatch() {
        let firstCatSubmit = firstCat
        let secondCatSubmit = secondCat
        if (firstCatSubmit === null || secondCatSubmit === null) {
            return alert("You suck, choose both!")
        } else {
        setSucClick(true)   
        handleButtonChoices1(firstCatSubmit)
        handleButtonChoices2(secondCatSubmit)
        }
        setAfterClick(false)
    }

    function handleTryAgain() {
        window.location.reload(false)
    }
    
    return (
        <div>
            <Grid container columns={3}>
            <Grid.Column style={styleSet}>
                <TileContent titleDisplay1={titleDisplay1} imageDisplay1={imageDisplay1} desDisplay1={desDisplay1} handleFirstCat={handleFirstCat} sucClick={sucClick} firstCat={firstCat} secondCat={secondCat} />
            </Grid.Column>
            <Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                {!afterClick ? 
                <Button id="mainbutton" onClick={handleTryAgain} size="massive" > Try Again 
                </Button> : 
                <Button id="secondbutton" onClick={handleMatch} className={gameGen && movieGen && beerGen && drinkGen && eatsGen ? "ui button" : "ui disabled button"} size='massive'>MATCH
                </Button>}
            </Grid.Column>
            <Grid.Column style={styleSet}>
                <SecondTileContent titleDisplay2={titleDisplay2} imageDisplay2={imageDisplay2} desDisplay2={desDisplay2} handleSecondCat={handleSecondCat}sucClick={sucClick} secondCat={secondCat} firstCat={firstCat} />
            </Grid.Column>
            </Grid>
            <Output titleDisplay2={titleDisplay2} titleDisplay1={titleDisplay1} sucClick={sucClick} />
        </div>
    )
}

export default Tiles
