
import React, {useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import firebase from'../firebase';



const Questions = () =>{
    const [questions, setQuestions] = useState([]);
    useEffect(()=>{
        let unsubscribe = firebase
        .firestore()
        .collection('contacts')
        .onSnapshot((snap)=>{
           const newQuestions = snap.docs.map((doc)=>( //laikinas kintamasis
                {   //nes objektas
                    id: document.id, //vieno
                    ...doc.data()   //kitu duomenu kopijos
                }
           ))
           setQuestions(newQuestions);
        });
        return ()=>unsubscribe();
    }, [])

    console.log(questions+"padave");

    return (
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Question</th>
                </tr>
            </thead>
            <tbody>
            {
                 questions.map((question, index)=>(
              
                <tr key={index}>
                <td>{index+1}</td>
                <td>{question.name}</td>
                <td>{question.email}</td>
                <td>{question.message}</td>
                </tr>
          
                 ))
                }
            </tbody>
            </Table>
</div>
    )}
export default Questions