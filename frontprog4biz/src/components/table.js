import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useTable } from 'react-table'
import { useState ,useEffect , useMemo } from 'react';

import agent from '../api/agent';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MaUTable>
  )
}



function CreateTable (){
  
  const [data, setData] = useState([]);

  const columns = React.useMemo(
    () => [
      { 
        Header: 'ID', 
        accessor: 'id',
      },
      {
          Header: 'First name',
          accessor: 'firstName',
      },
      {
          Header: 'Last name',
          accessor: 'lastName',
      },
      {
        Header: 'Creation Date',
        accessor: 'creationDate',
      }
    ],
    []
  )
  useEffect(() => {
    agent.Person.getAll().then(res => setData(res));
  }, [])



  return (
    <Table columns={columns} data={data} />
  )
}
export default CreateTable;