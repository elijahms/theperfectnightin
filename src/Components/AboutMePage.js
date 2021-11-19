import React from 'react'
import { Container, Message, Button, Grid } from 'semantic-ui-react'

const AboutMePage = () => {
	
	const styleSet = {textAlign: "center", fontSize: "20px", backgroundColor: 		"#e8a5af", color: "#ffffff", justifyContent: "center", alignItems: "center",}


	
	return (
	<div>
		<Container style={{padding: "5%"}} >
		<Message style= {styleSet} floating>Hi, Elijah here - I'm a budding software engineer and would love to connect with you!
        </Message>
		</Container>
		<Grid container columns={3} stackable>
		<Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
			<Button id="mainbutton" onClick={() => window.open("https://www.linkedin.com/in/elijah-silverman-917a91a5/", '_blank').focus()} >LinkedIn</Button>
		</Grid.Column>
		<Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
			<Button id="mainbutton" href="mailto:elijahmsilverman@gmail.com" >Email</Button>
		</Grid.Column>
		<Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
			<Button onClick={() => window.open("https://elijahsilverman.com", '_blank').focus()} id="mainbutton" >Website</Button>
		</Grid.Column>
		</Grid>
	</div>
	)
}

export default AboutMePage
