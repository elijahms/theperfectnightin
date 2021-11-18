import React, {useState} from 'react'
import { Button, Form, Container, Message } from 'semantic-ui-react'

const AddNewPage = () => {
    
    const styleSet = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "8%",
        marginRight: "8%",
        textAlign: "center",
        backgroundColor: "#e8a5af",
        borderRadius: "30px"
    }

    const [form, setForm] = useState({
        name: "",
        image: ""
    })

    function handleFormUpdate(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/eats", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(form)
        })
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
        })
        e.target.reset()
        alert("Thank you for your valuable Addition")
    }

    const specialButton = {
        transform: "rotate(-5deg)",
        display: "block",
        position: "relative",
        padding: "1.2em 2em",
        fontFamily: "MyThirdFont",
        fontSize: "0.75em",
        fontWeight: "600",
        letterSpacing: ".12em",
        textAlign: "center",
        textDecoration: "none",
        textTransform: "uppercase",
        color: "mintcream",
        // color: aquamarine
        background: "crimson",
        border: "0",
        borderRadius: ".2em",
        cursor: "pointer",
        transition: "all .3s ease-out",
        "&:hover": {
            color: "black" },
        "&:after": {
            boxSizing: "border-box",
            position: "absolute",
            top: ".5em",
            left: ".5em",
            content: "",
            width: "100%",
            height: "100%",
            background: "transparent",
            border: ".2em solid black",
            borderRadius: ".2em",
            transition: "all .15s ease-out" },
        "& hover after": {
            top: "0",
            left: "0"}
    
        }
    
    return (
        <div>
        <Container style={{padding: "5%"}} >
        <Message style= {{textAlign: "center", fontSize: "20px", backgroundColor: "#e8a5af", color: "#ffffff"}} floating>We wanted to provide a way for you to add some more "Eats" in case you were craving something and you didn't see it!
        </Message>
        </Container>
        <Form style={styleSet} onSubmit={handleSubmit} >
                <Form.Field style={{padding: "5%", fontSize: "22px"}} >
                    <label style={{color: "#ffffff"}} >Snack Name</label>
                    <input onChange={handleFormUpdate} name="name" placeholder='eg: fries, gummies, etc.' />
                </Form.Field>
                <Form.Field style={{padding: "5%", fontSize: "22px"}} >
                    <label style={{color: "#ffffff"}} >Snack Image</label>
                    <input onChange={handleFormUpdate} name="image" placeholder='https:abcdefg.com'/>
                </Form.Field>
                <Button style={specialButton} type='submit'>Submit</Button>
        </Form>
        </div>
    )
}

export default AddNewPage
