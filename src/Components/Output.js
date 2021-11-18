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
                {!sucClick ? `You're Beautiful! We think you'll enjoy the pairing that we suggest.` : `${titleDisplay1} would go well with ${titleDisplay2}. Sit back, relax and enjoy your Night In`}
                <br />
            {sucClick && 
            <div>
            <a id={"tweet"} href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
            }
            </Message>
    )
}

export default Output
