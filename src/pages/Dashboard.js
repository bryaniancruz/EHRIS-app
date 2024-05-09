import React, {useState, useRef , Component} from 'react';
import { Button, Form, FormGroup, Grid,FormInput, FormSelect, FormRadio, FormCheckbox,FormTextArea,
    FormButton, Header, Image, Message, Segment,Icon,Container,Card,FormField, Label, Dropdown,Input,Divider,
    CardContent,CardHeader,CardMeta,CardDescription,
    GridColumn,
    GridRow,CardGroup ,Table,TableHeader,TableBody,TableHeaderCell,TableRow,Menu,MenuItem,TableFooterm,TableCell,TableFooter,Search
    ,Pagination

    } from 'semantic-ui-react'
import ReactDOM from "react-dom";
import FileUploadButton from '../component/FileUploadButton';

const itemsPerPage = 5;
function DashBoard  (props) {

    const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState(1);

  
const searchData = [
    { id: 1, name: 'John', age: 30 ,status: 'Probationary' },
    { id: 2, name: 'Jane', age: 25  ,status: 'Regular'},
    { id: 3, name: 'Doe', age: 35 ,status: 'Probationary' },
    { id: 4, name: 'John', age: 30 ,status: 'Probationary'},
    { id: 5, name: 'Jane', age: 25,status: 'Regular' },
    { id: 6, name: 'Doe', age: 35 ,status: 'Regular'},
    { id: 7, name: 'John', age: 30,status: 'Project-Based/Contractual'}, 
    { id: 8, name: 'Jane', age: 25,status: 'Project-Based/Contractual'}, 
    { id: 9, name: 'Doe', age: 35 ,status: 'Probationary' },
    { id: 10, name: 'John', age: 30 ,status: 'Terminated' },
    { id: 11, name: 'Jane', age: 25 ,status: 'Probationary' },
    { id: 12, name: 'Doe', age: 35 ,status: 'Terminated' },
    { id: 13, name: 'John', age: 30 ,status: 'Probationary' },
    { id: 14, name: 'Jane', age: 25 ,status: 'Project-Based/Contractual' },
    { id: 15, name: 'Doe', age: 35 ,status: 'Probationary' },
    
    // Add more data as needed
  ];


  const handleSearchChange = (event, { value }) => {
    setSearchQuery(value);
    setActivePage(1); // Reset page to 1 when search query changes
  };

  const filteredData = searchData.filter(
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.age.toString().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const visibleData = filteredData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

return (
<div>
    
<Container fluid  style={{ marginTop: "5vh" }}>

<Header as='h2'>
    Dashboard
</Header>
<Segment>
    
<div class="ui four
  cards">
<Card>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <CardHeader>Steve Sanders</CardHeader>
        <CardMeta>Friends of Elliot</CardMeta>
        <CardDescription>
          Steve wants to add you to the group <strong>best friends</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <CardHeader>Steve Sanders</CardHeader>
        <CardMeta>Friends of Elliot</CardMeta>
        <CardDescription>
          Steve wants to add you to the group <strong>best friends</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <CardHeader>Steve Sanders</CardHeader>
        <CardMeta>Friends of Elliot</CardMeta>
        <CardDescription>
          Steve wants to add you to the group <strong>best friends</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <CardHeader>Steve Sanders</CardHeader>
        <CardMeta>Friends of Elliot</CardMeta>
        <CardDescription>
          Steve wants to add you to the group <strong>best friends</strong>
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </CardContent>
    </Card>

  
</div>

<Divider />

<Header as='h2'>
    Employee List
</Header>

<Container>
<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
<Input 
        
        value={searchQuery}
        onChange={handleSearchChange}
        icon="search"
        placeholder="Search..."
      />
      </div>
 {visibleData.length > 0 ? (
        <Table celled padded color ='teal' selectable compact="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {visibleData.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                <Button color='twitter' size='mini' value ={item.id}>  <Icon name='clipboard' />View</Button> 
                <Button color='green' size='mini' value ={item.id}>  <Icon name='edit' />Edit</Button> 
                <Button color='red' size='mini' value ={item.id}>  <Icon name='delete' />Delete</Button> 
                </Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.age}</Table.Cell>
                <Table.Cell>  
        {
        item.status === 'Probationary'?(
            <Label color ='blue'>{item.status}</Label>
        ): item.status === 'Regular' ? (
            <Label color ='green'>{item.status}</Label>
        ): item.status === 'Project-Based/Contractual'  ?
    (
        <Label color ='yellow'>{item.status}</Label>
    ):
        
        
        (<Label color ='red'>{item.status}</Label>)
        }
         
             </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <center>
        <Message color ='yellow'>
          <Message.Header>No Data Found</Message.Header>
          <p>Your search did not match any records.</p>
        </Message>.
        </center>
      )}

<div style={{ display: 'flex', justifyContent: 'flex-end' }}>

      <Pagination 
        activePage={activePage}
        onPageChange={(event, { activePage }) => setActivePage(activePage)}
        totalPages={totalPages}
      />
    </div>
</Container>

</Segment>
</Container>
</div>



      )
}


export default DashBoard;