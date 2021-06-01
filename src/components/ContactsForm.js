import React, {useState} from 'React';
import {Form, Button} from 'react-bootsrap';

const ContactsForm =() =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    handleSubmit = (e) => {
        e.preventDefault();
        if(name.length < 3){
            alert('Uzpildykite savo varda');
            return;
        }

        if(email === ""){
            alert('Uzpildykite savo varda');
            return;
        }
        
        if(message.length < 10 && message.length >400){
            alert('Uzpildykite savo varda');
            return;
        }

        //cia firebase
        setName('');
        setEmail('');
        setMessage('');

    }


  return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Vardas</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            value = {name}
            onChange={(e)=>setName(e.target.value)}
            />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
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
  );
}
export default ContactsForm;
