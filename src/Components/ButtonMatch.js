import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonMatch = () => {
    return (
        <div>
            <Button.Group widths='5'>
                <Button>Beer</Button>
                <Button>Movies</Button>
                <Button>Cocktails</Button>
                <Button>Games</Button>
                <Button>Eats</Button>
            </Button.Group>
        </div>
    )
}

export default ButtonMatch
