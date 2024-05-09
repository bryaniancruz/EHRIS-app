import React, {useState} from 'react';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment,DropdownMenu,Icon,DropdownItem,DropdownDivider,DropdownHeader,
    Dropdown,MenuItem,MenuMenu } from 'semantic-ui-react';
    import Login from '../pages/Login'
    import Register from '../pages/Register';
    
    
    import Dashboard from '../pages/Dashboard';
    import Source from '../images/hrisLogo.jpg';
    import { useHistory } from 'react-router-dom';
    

 

    const NavBar = (props) => {
   
      const [currentForm,setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  console.log(formName)
  setCurrentForm(formName);
}

        // Correct usage of useState within the functional component
        const [activeItem, setActiveItem] = useState('register');
      
        const handleItemClick = (name) =>{
          console.log(name);
          setActiveItem(name);
        } 

const handleLogout = () => {
  window.location.href = '/login';
}
    
        return (
          <div>
        
          <Menu  stackable pointing secondary color='teal'  inverted>
          <Container>
          <MenuItem size='tiny'>
          <img alt='logo' src={Source}  />
        </MenuItem>
          <Menu.Item
            name='home'
            active={activeItem === 'dashboard'}
            onClick={() => handleItemClick('dashboard')}
          >
            Home
          </Menu.Item>
    
          <Menu.Item
            name='register'
            active={activeItem === 'register'}
            onClick={() => handleItemClick('register')}
          >
            Register
          </Menu.Item>
    
          <Menu.Item
            name='friends'
            active={activeItem === 'dashboard1'}
            onClick={() => handleItemClick('dashboard1')}
          >
            Friends
          </Menu.Item>
          <MenuMenu position='right'>
          <Dropdown   active={activeItem === 'dropdown'}    item  simple text ='Logout' position='right'>
           <DropdownMenu><DropdownItem>Edit Profile</DropdownItem>
              <DropdownItem>Change Password</DropdownItem>
              <DropdownDivider />
              <DropdownItem onClick = {handleLogout }>Logout</DropdownItem>
              
   
             
              </DropdownMenu>
          </Dropdown>
          </MenuMenu>
          </Container>
        </Menu>

<div>
{
      
      activeItem  === 'dashboard' ? (<Dashboard /> ):
      activeItem  === 'register' ?  (<Register /> ) :
       (<Dashboard />)
     
 
 } 
</div>
          </div> 
          
         

        ) ;
       
      
      };
      
      export default NavBar;