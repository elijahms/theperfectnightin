import React, {useState, useContext} from 'react'
import { Grid, Button, Icon, Label } from 'semantic-ui-react'
import TileContent from './TileContent'
import SecondTileContent from './SecondTileContent'
import Output from './Output'
import { FetchContext } from '../Context/context'

const Tiles = () => {

    const {movieGen, gameGen, drinkGen, beerGen, eatsGen , sucClick, setSucClick, afterClick, setAfterClick, imageDisplay1, setImageDisplay1, titleDisplay1, setTitleDisplay1, firstCat, setFirstCat, desDisplay1, setDesDisplay1, imageDisplay2, setImageDisplay2, titleDisplay2, setTitleDisplay2, secondCat, setSecondCat, desDisplay2, setDesDisplay2} = useContext(FetchContext)
    
    const styleSet = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const specialButton = {
    transform: "rotate(-5deg)",
	display: "block",
	position: "relative",
	padding: "1.2em 2em",
	fontFamily: "MyThirdFont",
	fontSize: "0.75em",
	fontWeight: "600",
	letterSpacing: ".12em",
	textAlign: "center",
	textDecoration: "none",
	textTransform: "uppercase",
	color: "mintcream",
	// color: aquamarine
	background: "crimson",
	border: "0",
	borderRadius: ".2em",
	cursor: "pointer",
	transition: "all .3s ease-out",
    "&:hover": {
		color: "black" },
	"&:after": {
		boxSizing: "border-box",
		position: "absolute",
		top: ".5em",
		left: ".5em",
		content: "",
		width: "100%",
		height: "100%",
		background: "transparent",
		border: ".2em solid black",
		borderRadius: ".2em",
		transition: "all .15s ease-out" },
	"& hover after": {
		top: "0",
		left: "0"}

    }

    //enables the game title to be displayed correctly
    const titleCase = (str) => {
        let splitStr = str.split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     }
     
    // state for displaying the card
    // const [sucClick, setSucClick] = useState(false)
    // const [afterClick, setAfterClick] = useState(true)
    // const [imageDisplay1, setImageDisplay1] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
    // const [titleDisplay1, setTitleDisplay1] = useState('Choose Wisely...')
    // const [firstCat, setFirstCat] = useState(null)
    // const [desDisplay1, setDesDisplay1] = useState("enjoy you night")
    // const [imageDisplay2, setImageDisplay2] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
    // const [titleDisplay2, setTitleDisplay2] = useState('Choose Wisely...')
    // const [secondCat, setSecondCat] = useState(null)
    // const [desDisplay2, setDesDisplay2] = useState("enjoy you night")


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
            {!afterClick ? <Button onClick={handleTryAgain} size="massive" style= {{backgroundColor: "#efe8ad", borderRadius: "100px"}}> Try Again </Button> : <Button style= {specialButton} onClick={handleMatch} className={gameGen && movieGen && beerGen && drinkGen && eatsGen ? "ui button" : "ui disabled button"} size='massive'>MATCH</Button>}
            {sucClick && <Button size='massive' as='div' labelPosition='right'>
                <Button color='red'>
                    <Icon name='heart' />
                </Button>
                <Label as='a' basic color='red' pointing='left'>
                    2,048
                </Label>
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
