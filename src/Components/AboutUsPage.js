import React from 'react'
import { Container, Message, Button, Grid } from 'semantic-ui-react'

const AboutUsPage = () => {
	
	const styleSet = {textAlign: "center", fontSize: "20px", backgroundColor: 		"#e8a5af", color: "#ffffff", justifyContent: "center", alignItems: "center",}
	
	return (
	<div>
		<Container style={{padding: "5%"}} >
		<Message style= {styleSet} floating>Hi, Elijah here - I'm a budding SE and would love to connect with you!
        </Message>
		</Container>
		<Grid container columns={3}>
		<Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
			<Button id="mainbutton" >LinkedIn</Button>
		</Grid.Column>
		<Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
			<Button id="mainbutton" >Email</Button>
		</Grid.Column>
		<Grid.Column style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
			<Button id="mainbutton" href="https://elijahsilverman.com/">Website</Button>
		</Grid.Column>
		</Grid>
	</div>
	)
}

export default AboutUsPage
