import React, {useEffect, useContext} from 'react'
import Tiles from './Tiles'
import { FetchContext } from '../Context/context'

const ContentContainter = () => {

    const {setMovieGen, setgameGen, setdrinkGen, setBeerGen, setEatsGen} = useContext(FetchContext)
    
    const styleSet = {
        padding: "3%",
        height: "auto"
    }

    const movieOptions = ['0111161', '15097216', '0068646', '0468569', '0071562', '0108052', '0167260', '0110912', '0060196', '0120737']
    let movieRandom = movieOptions[Math.floor(Math.random() * movieOptions.length)]

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((r) => r.json())
        .then((data) => {
            console.log(data.drinks[0])
            setdrinkGen(data.drinks[0])
        })
        fetch("https://api.boardgameatlas.com/api/search?limit=100&username=trentellingsen&client_id=brAYmW2oQo")
        .then((r) => r.json())
        .then((data) => {
            //console.log(data.games);
            setgameGen(data.games)
        })
        fetch(`https://www.omdbapi.com/?i=tt${movieRandom}&type=movie&apikey=319e819e&`)
        .then((r) => r.json())
        .then((data) => {
            //.log(data);
            setMovieGen(data)
        })
        fetch("https://api.punkapi.com/v2/beers/random")
        .then((r) => r.json())
        .then((data) => {
            setBeerGen(data[0])
            //console.log(data[0]);
        })
        fetch(`${process.env.REACT_APP_API_URL}/eats`)
        .then((r) => r.json())
        .then((data) => {
            setEatsGen(data)
            //console.log(data);
        })
    }, [])
    
    return (
        <div style={styleSet}>
            <Tiles />
        </div>
    )
}

export default ContentContainter