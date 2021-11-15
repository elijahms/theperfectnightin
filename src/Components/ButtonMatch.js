import React from 'react'
import { Button, Divider } from 'semantic-ui-react'

const ButtonMatch = () => {
    return (
        <div>
            <Button.Group widths='5'>
                <Button>Beer</Button>
                <Button>Movies</Button>
                <Button>ls</Button>
                <Button>Reviews</Button>
                <Button>Support</Button>
            </Button.Group>
    <Divider />
        </div>
    )
}

export default ButtonMatch
