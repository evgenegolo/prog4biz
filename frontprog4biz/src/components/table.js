import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useTable } from 'react-table'
import { useState, useEffect, useMemo } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import agent from '../api/agent';



function CreateTable() {

  const [person, setPerson] = useState([]);
  const [pageSize , setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(10);


  const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  { field: 'creationDate', headerName: 'Creation Date', width: 200 },
  ];
  useEffect(() => {
    console.log("update");
    agent.Person.getAll(pageSize,pageNumber).then(res => {
      setPerson(res.persons);
      setTotalCount(res.count);
    });
  }, [pageSize,pageNumber])



  return (
    // <Table columns={columns} data={data} pageSize={5} />
    <div >
      <DataGrid rows={person} columns={columns} pageSize={pageSize} 
          autoHeight
          pagination
          paginationMode="server"
          loading={false}
          rowCount={totalCount}
          onPageChange={(event) => {
            console.log(event.page);
            setPageNumber(event.page+1);
           
        }}
        onPageSizeChange={(event) => {
          setPageSize(event.pageSize);
        }}
      
      
      />
    </div>
  )
}
export default CreateTable;