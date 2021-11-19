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
        borderRadius: "30px",
        boxShadow: "10px 10px #ffffff",
        paddingBotton: "3%"
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
        fetch(`${process.env.REACT_APP_API_URL}/eats`, {
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
    
    return (
        <div>
        <Container style={{padding: "5%"}} >
        <Message style= {{textAlign: "center", fontSize: "20px", backgroundColor: "#e8a5af", color: "#ffffff"}} floating>We wanted to provide a way for you to add some more "Eats" in case you were craving something and you didn't see it!
        </Message>
        </Container>
        <Form style={styleSet} onSubmit={handleSubmit} >
                <Form.Field style={{padding: "5%", fontSize: "22px"}} >
                    <label style={{color: "#ffffff"}} >Snack Name</label>
                    <input onChange={handleFormUpdate} name="name" placeholder='eg:  fries, gummies, chips' />
                </Form.Field>
                <Form.Field style={{padding: "5%", fontSize: "22px"}} >
                    <label style={{color: "#ffffff"}} >Snack Image</label>
                    <input onChange={handleFormUpdate} name="image" placeholder='https://abcdefg.com'/>
                </Form.Field>
                <Button id="mainbutton" type='submit'>Submit</Button>
        </Form>
        </div>
    )
}

export default AddNewPage
