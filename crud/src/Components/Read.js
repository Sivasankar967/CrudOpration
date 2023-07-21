import React from 'react';
import { Table } from 'semantic-ui-react'
import  { useEffect, useState } from 'react';
import axios from 'axios';
export default function Read() {

const [APIData, setAPIData] = useState([]);
useEffect(() => {
       axios.get('https://64ba124979b7c9def6c18e57.mockapi.io/apidata')
       .then((res)=>{
          setAPIData(res.data)
       })
}, [])
 const setData=(data)=>{
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
 }
 const getData = () => {
    axios.get(`https://64ba124979b7c9def6c18e57.mockapi.io/apidata`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
 const onDelete=(id)=>{
    axios.delete(`https://64ba124979b7c9def6c18e57.mockapi.io/apidata/${id}`)
    getData()
 }

    return (
        <div>
    
            
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
          {APIData.map((data) => {
            return (
            <Table.Row  key={data.id}>
               <Table.Cell>{data.firstName}</Table.Cell>
               <Table.Cell>{data.lastName}</Table.Cell>
               <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
               <Table.Cell><button onClick={()=>setData(data)}>Update</button></Table.Cell>
               <Table.Cell><button onClick={() => onDelete(data.id)}>Delete</button></Table.Cell>


        </Table.Row>
   )})}
    </Table.Body>
            </Table>
        </div>
    )
}
