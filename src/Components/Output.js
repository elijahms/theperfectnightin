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
            <Message style={styleSet}>
                {!sucClick ? `You're Beautiful! We think you'll enjoy the pairing that we suggest.` : <span> <span style={{color: "#cc2d30"}} >{titleDisplay1}</span> would go well with <span style={{color: "#cc2d30"}} >{titleDisplay2}</span> . Sit back, relax and enjoy your Night In </span>}
                <br />
                {sucClick && 
                <div>
                <a style={{color: "#1DA1F2"}} href={`https://twitter.com/intent/tweet?text=${`${titleDisplay1} would go well with ${titleDisplay2}. Sit back, relax and enjoy your Night In`}`}>Tweet</a>
                <br />
                <a style={{color: "#25D366"}} href={`whatsapp://send?text=${`${titleDisplay1} would go well with ${titleDisplay2}. Sit back, relax and enjoy your Night In`}`} data-action="share/whatsapp/share">Whatsapp</a>
                </div>
                }
            </Message>
    )
}

export default Output
