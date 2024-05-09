import React, {useState} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


function Login  (props){
    
const [email,setEmail] = useState('');
const [pass,setPass] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email + ' ' + pass);

}
    return (
        
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>        
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
            {/* <Image src='/logo.png' />   */} E-HRIS
          </Header>
          <Form size='large' onSubmit={handleSubmit} >
            {/* <Segment stacked color ='blue'>  */}
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(e)=> setEmail(e.target.value)} value ={email}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password' onChange={(e)=> setPass(e.target.value)} value ={pass}
              />  
          <Button color='blue'animated fluid type="submit">
            <Button.Content visible>Log In</Button.Content>
            <Button.Content hidden>
              <Icon name="sign-in" />
            </Button.Content>
          </Button>
            {/* </Segment> */}
          </Form>
          <Message>
            Not Registered? <a href='#' onClick={() => props.onFormSwitch('register')}>Click Here</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
}



   
  
  export default Login