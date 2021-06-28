import React, { useState } from 'react';
import { Button, Dialog } from '@material-ui/core';
import CreatePerson from './createPerson';
import CreateTable from './table';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


function FetchPerson () {

    const [openDialog, setopenDialog] = useState(false);
    const classes = useStyles();
    return (
            <div>
                <CreateTable />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={()=>setopenDialog(true)}
                    endIcon={<SendIcon/>}
                >
                    Add Person
                </Button>
                <Dialog
                     open={openDialog || false}
                     onClose={()=>setopenDialog(false)}
                     style={{
                         display:'flex',
                         flexDirection:'column',
                     }}
                >
                    <CreatePerson />                    
                </Dialog>
            </div>
        );
    
}
export default FetchPerson;