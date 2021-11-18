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
		<Grid container columns={3}>
		<Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
			<Button id="mainbutton" href="https://www.linkedin.com/in/elijah-silverman-917a91a5/" >LinkedIn</Button>
		</Grid.Column>
		<Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
			<Button id="mainbutton" href="mailto:elijahmsilverman@gmail.com" >Email</Button>
		</Grid.Column>
		<Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
			<Button id="mainbutton" href="https://elijahsilverman.com/">Website</Button>
		</Grid.Column>
		</Grid>
	</div>
	)
}

export default AboutMePage
