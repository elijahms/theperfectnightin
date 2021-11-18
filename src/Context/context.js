import { useState, createContext} from "react";

const FetchContext = createContext()

const FetchProvider = ({children}) => {
    
    const [movieGen, setMovieGen] = useState('')
    const [gameGen, setgameGen] = useState('')
    const [drinkGen, setdrinkGen] = useState([])
    const [beerGen, setBeerGen] = useState('')
    const [eatsGen, setEatsGen] = useState('')
    const [sucClick, setSucClick] = useState(false)
    const [afterClick, setAfterClick] = useState(true)
    const [imageDisplay1, setImageDisplay1] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
    const [titleDisplay1, setTitleDisplay1] = useState('Choose Wisely...')
    const [firstCat, setFirstCat] = useState(null)
    const [desDisplay1, setDesDisplay1] = useState("enjoy you night")
    const [imageDisplay2, setImageDisplay2] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png')
    const [titleDisplay2, setTitleDisplay2] = useState('Choose Wisely...')
    const [secondCat, setSecondCat] = useState(null)
    const [desDisplay2, setDesDisplay2] = useState("enjoy you night")

    return (
    <FetchContext.Provider
        value={{
            movieGen,
            setMovieGen,
            gameGen,
            setgameGen,
            drinkGen,
            setdrinkGen,
            beerGen,
            setBeerGen,
            eatsGen,
            setEatsGen,
            sucClick,
            setSucClick,
            afterClick,
            setAfterClick,
            imageDisplay1,
            setImageDisplay1,
            titleDisplay1,
            setTitleDisplay1,
            firstCat,
            setFirstCat,
            desDisplay1,
            setDesDisplay1,
            imageDisplay2,
            setImageDisplay2,
            titleDisplay2,
            setTitleDisplay2,
            secondCat,
            setSecondCat,
            desDisplay2,
            setDesDisplay2

        }}>{children}</FetchContext.Provider>
    )
}

export {FetchContext, FetchProvider}