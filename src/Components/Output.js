import React from 'react'
import { Message } from 'semantic-ui-react'

const Output = ({titleDisplay1, titleDisplay2, sucClick}) => {
    
    const styleSet = {
        width: "78%",
        left: "11%",
        marginTop: "5%",
        textAlign: "center",
        fontSize: "25px",
        backgroundColor: "#e8a5af",
        fontFamily: "MyThirdFont",
        color: "#ffffff"
    }
    
    return (
            <Message style={styleSet}
                content= {!sucClick ? `You're Beautiful! We think you'll enjoy the pairing that we suggest.` : `${titleDisplay1} would go well with ${titleDisplay2}. Sit back, relax and enjoy your Night In`}
            />
    )
}

export default Output
