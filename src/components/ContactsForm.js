import React, { useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import firebase from '../firebase';//iseinam is components, tada randa

const ContactsForm =() =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

   const handleSubmit = (e) => {
        e.preventDefault();//kad neprekratu formos
        if(name.length < 3){
            alert('Įrašykite savo varda');
            return;
        }

        if(email === ""){
            alert('Įrašykite el.pašto adresą');
            return;
        }
        
        if(message.length < 10 && message.length >400){
            alert('Įrašykite žinutę');
            return;
        }
//sukuriam kolekcija
        firebase
        .firestore() //. kad gauti metoda issaugoti 
        .collection('contacts').add({ //duomenu paketas pavadinimu 'contacts', siusim objekta
            name: name, //db atsiras name: state kint. name
            email: email,
            message: message,
            created: firebase.firestore.FieldValue.serverTimestamp()
   })
   .then(()=>{
       alert('zinute nusiusta');
   })
   .catch((err)=>{
       alert(err.message);
   })

        //cia firebase
        setName('');
        setEmail('');
        setMessage('');

    }


  return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.formName">
            <Form.Label>Vardas</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="vardas" 
            value = {name}
            onChange={(e)=>setName(e.target.value)}
            />
        </Form.Group>
        <Form.Group controlId="exampleForm.formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Žinutė</Form.Label>
            <Form.Control 
            as="textarea" 
            rows={3} 
            value = {message}
            onChange={(e)=>setMessage(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Siusti
        </Button>
        </Form>
        </div>
    )
}

export default ContactsForm
