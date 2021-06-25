import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import agent from '../api/agent';
import { Button, Dialog } from '@material-ui/core';
import CreatePerson from './createPerson';



export default class FetchPerson extends Component {




    FetchEmployeeDataState = {
        perList: [],
        loading: true,
        windowCreationOpen: false
    }

    handleClickOpen = () => {
        this.setState({ windowCreationOpen: true });
    };

    handleClose = () => {
        this.setState({ windowCreationOpen: false });
    };

    constructor() {
        super();
        this.state = { perList: [], loading: true };
        agent.Person.getAll().then(res => {
            this.setState({ perList: res, loading: false });
        });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderPersonsTable(this.state.perList);

        return <div>
            <h1>Person Data</h1>
            <p>
                Create New
            </p>
            {contents}
        </div>;
    }




    // Returns the HTML table to the render() method.  
    renderPersonsTable(perList) {

        return (

            <div className="">

                <table className='table'>
                    <thead>
                        <tr>

                            <th>Person ID</th>
                            <th>First Name</th>
                            <th>Lust Name</th>
                            <th>Date Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {perList.map(per =>
                            <tr key={per.id}>
                                <td>{per.id}</td>
                                <td>{per.firstName}</td>
                                <td>{per.lastName}</td>
                                <td>{per.creationDate}</td>
                            </tr>
                        )}
                    </tbody>

                </table>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    Add Person
                </Button>
                <Dialog
                    open={this.state.windowCreationOpen || false}
                    onClose={this.handleClose}
                >
                    <CreatePerson>

                    </CreatePerson>
                </Dialog>
            </div>


        );
    }
}

// export class EmployeeData {
//     employeeId = 0;
//     name = "";
//     gender= "";
//     city = "";
//     department = "";
// }