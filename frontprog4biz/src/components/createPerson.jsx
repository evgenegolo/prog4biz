import React , { useState }from 'react';
import { Button } from '@material-ui/core';
import agent from '../api/agent';




function CreatePerson() {

const  setFirstName=(event) => {
const value = event.target.value;
setPerson({...person,firstName:value})
}

const  setLastName=(event) => {
  const value = event.target.value;
  setPerson({...person,lastName:value})
  }
  const  setCreationDate=(event) => {
    const value = event.target.value;
    setPerson({...person,creationDate:value})
    }
  

const [person,setPerson]= useState({firstName:"",lastName:"" ,creationDate:""});

const onSubmit = ()=>{
  agent.Person.createPerson(person);
}

  return (
    <div className="createPerson">
        <p><label >First Name:</label><input type="text" onChange={setFirstName}/></p>
        <p><label >Last Name:</label><input type="text" onChange={setLastName}  /></p>
        <p><label >Creation Time:</label><input type="text" onChange={setCreationDate}/></p>
        <Button
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
        >
          Submit
        </Button>
    </div>
  );
}

export default CreatePerson;