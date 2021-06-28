import React , { useState }from 'react';
import { Button } from '@material-ui/core';
import agent from '../api/agent';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  root:{
    display:'flex',
    flexDirection:'column',
    padding:'5em',
  },

  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    dateField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }

}));


export default function CreatePerson() {

  const classes = useStyles();

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
    const [sucses, setSucses] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [ans, setAns] = React.useState(false);
    
    const onSubmit = ()=>{
      let ans = agent.Person.createPerson(person);
      if(ans === true)
        setSucses(true);
      else
        setError(true);
      
    }

    return (
      <div className={classes.root} >
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={setFirstName} />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={setLastName} />
            <TextField
                id="date"
                label="Creation Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.dateField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={setCreationDate}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </form>
          
        <Snackbar open={sucses} autoHideDuration={6000} >
          <Alert  severity="success">
            This is a success message!
          </Alert>
        </Snackbar>

        <Snackbar open={error} autoHideDuration={6000}>
          <Alert  severity="error">
            This is an error message!        
          </Alert>
        </Snackbar>
      </div>
    );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

