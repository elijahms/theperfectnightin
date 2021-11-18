import React from 'react'
import { Message } from 'semantic-ui-react'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon,
    //TwitterIcon,
    WhatsappIcon,
  } from "react-share";

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
            <a id={"tweet"} href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

            <WhatsappShareButton style={{paddingLeft: "1%", paddingRight: "1%"}}  url="http://localhost:3001/" separator="   " title={`MATCH IT: ${titleDisplay1} would go well with ${titleDisplay2}. Sit back, relax and enjoy your Night In`} >
            <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>

            <LinkedinShareButton style={{paddingLeft: "1%", paddingRight: "1%"}} url="http://localhost:3001/" title="yooyo">
            <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>

            <EmailShareButton style={{paddingLeft: "1%", paddingRight: "1%"}}  title={`MATCH IT: ${titleDisplay1} would go well with ${titleDisplay2}. Sit back, relax and enjoy your Night In`} >
            <EmailIcon size={32} round={true} />
            </EmailShareButton>
            </div>
            }
            </Message>
    )
}

export default Output
