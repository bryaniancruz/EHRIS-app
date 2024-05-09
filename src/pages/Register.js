import React, {useState, useRef , Component} from 'react';
import { Button, Form, FormGroup, Grid,FormInput, FormSelect, FormRadio, FormCheckbox,FormTextArea,
    FormButton, Header, Image, Message, Segment,Icon,Container,Card,FormField, Label, Dropdown,Input,Divider,
    CardContent,CardHeader,CardMeta,CardDescription,
    GridColumn
    } from 'semantic-ui-react'
import ReactDOM from "react-dom";
import FileUploadButton from '../component/FileUploadButton';

import NavBar from '../component/Navbar';


function Register  (props) {

const [email,setEmail] = useState('');
const [pass,setPass] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email + ' ' + pass);

}

const [uploadedFile, setuploadedFile] = useState(false);
const [file, setFile] = useState();

const fileInputRef = useRef(null);
// onFileSelect(file);
    function handleFile(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setuploadedFile(true);
    }


    

   


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
const ref = useRef();

const position = [
    { key: 'Arabic', text: 'Position1', value: 'Position' },
    { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
    { key: 'Danish', text: 'Danish', value: 'Danish' },
    { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
    { key: 'English', text: 'English', value: 'English' },
    { key: 'French', text: 'French', value: 'French' },
    { key: 'German', text: 'German', value: 'German' },
    { key: 'Greek', text: 'Greek', value: 'Greek' },
    { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
    { key: 'Italian', text: 'Italian', value: 'Italian' },
    { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
    { key: 'Korean', text: 'Korean', value: 'Korean' },
    { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
    { key: 'Persian', text: 'Persian', value: 'Persian' },
    { key: 'Polish', text: 'Polish', value: 'Polish' },
    { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
    { key: 'Russian', text: 'Russian', value: 'Russian' },
    { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
    { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
    { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
    { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
  ]



const employmentStatus = [
    { key: 'Probationary', text: 'Probationary', value: 'Probationary' },
    { key: 'Regular', text: 'Regular', value: 'Regular' },
    { key: 'Project Based / Contractual', text: 'Project Based / Contractual', value: 'Project Based / Contractual' },
    { key: 'Resigned', text: 'Resigned', value: 'Resigned' },
    { key: 'Terminated', text: 'Terminated', value: 'Terminated' },
    { key: 'Benched', text: 'Benched', value: 'Benched' },

  ]

  const [selectedValue, setSelectedValue] = useState('');
  const [showResignedField, setShowResignedField] = useState(false);
  const [showTerminatedField, setShowTerminatedField] = useState(false);
  const [showProjectBasedField, setShowProjectBasedField] = useState(false);
  const [showRegularField, setShowRegularField] = useState(false);

  const handleDropdownChange = (event, data) => {
    setSelectedValue(data.value); // Update the selected value state
    setShowTerminatedField(data.value === 'Terminated');
    setShowProjectBasedField(data.value === 'Project Based / Contractual');
    setShowRegularField(data.value === 'Regular');
    setShowResignedField(data.value === 'Resigned');
  };

return (
<div>

<Container  style={{ marginTop: "10vh" }}>

<Header as='h2'>
    E-HRIS Registration Form
</Header>
<Segment>


<Form >

{uploadedFile &&(
    <GridColumn  verticalAlign='center' >

 <Image src={file} size='small'  position='right'/>


   
  </GridColumn>


    )}
<FormGroup widths='equal'>

          <FormInput fluid label='First name' placeholder='First name' />
          <FormInput fluid label='Middle name' placeholder='Middle name' />
          <FormInput fluid label='Last name' placeholder='Last name' />
         
        </FormGroup>




        <FormGroup widths='equal'>

        <FormSelect
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        <FormInput ref={ref}   label='Date of Birth' type='date' />
        </FormGroup>

        <Label  color='teal'>Current Address</Label>

        <FormGroup inline  widths='equal'  >
        {/* <FormField  width={1}>
        <label>Current Address</label>
        </FormField> */}

          <FormInput fluid  placeholder='Street No.' width={2} />
          <FormInput fluid  label='' placeholder='Street name'  width={3} />
          <FormInput fluid  placeholder='Brgy.'  width={3} />
          <FormInput fluid  placeholder='Municipality/City'  width={3} />
          <FormInput fluid  placeholder='Province'  width={3} />
          {/* <FormInput fluid  placeholder='Last name' /> */}
        </FormGroup>

        <Label  color='teal'>Permanent Address</Label>

        <FormGroup inline  widths='equal'  >
        {/* <FormField  width={1}>
        <label>Current Address</label>
        </FormField> */}

          <FormInput fluid  placeholder='Street No.' width={2} />
          <FormInput fluid  label='' placeholder='Street name'  width={3} />
          <FormInput fluid  placeholder='Brgy.'  width={3} />
          <FormInput fluid  placeholder='Municipality/City'  width={3} />
          <FormInput fluid  placeholder='Province'  width={3} />

          {/* <FormInput fluid  placeholder='Last name' /> */}
        </FormGroup>
        <FormGroup widths='equal'>

        <Form.Field >
        <Label  color='teal'>Employment Data</Label>
      <Dropdown  clearable fluid // multiple
        search
        selection
        options={position}
        placeholder='Select Job Title'

        />

      </Form.Field>

      <Form.Field>
    <div>
        <Label color='teal'>Picture</Label>
    <input
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleFile}
        // style={{ display: 'none' }}
      />
       
    </div>


</Form.Field>
   

{/* <Button
        icon="upload"
        label={{
            basic: true,
            content: 'Select file(s)'
        }}
         type="file"
        labelPosition="right"
    />
    <input
        hidden
        id="upload"
        multiple
        type="file"
        onChange={handleFile}
    />
<Label  color='teal'>Select Picture</Label>
<FormInput fluid   type='file'onChange={handleFile} /> */}


{/*
<Form.Field>
    <div>
    <input
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleFile}
        // style={{ display: 'none' }}
      />
       <label htmlFor="file-input">
        <Button as="div" labelPosition="right">
          <Button color="teal" icon>
            <Icon name="file" />
            Upload
          </Button>
          <label htmlFor="file" className="ui basic teal left pointing label">
            Select Image
          </label>
        </Button>
      </label>
    </div>


</Form.Field> */}


      <Form.Field>
            <Label color='teal'>Start Date</Label>
         <FormInput ref={ref}    type='date' min={new Date().toISOString().slice(0, 10)} />
        </Form.Field>

        <Form.Field >
        <Label  color='teal'>Status</Label>
        <Dropdown  clearable fluid // multiple
        search
        selection
        options={employmentStatus}
        placeholder='Select Status'
        value={selectedValue}
        onChange={handleDropdownChange}
        />

      </Form.Field>
     {showResignedField && (
        <Form.Field>
            <Label color='teal'>Date Of Resignation</Label>
         <FormInput ref={ref}    type='date' />
        </Form.Field>



      )}
       {showResignedField && (
        <Form.Field>
            <Label color='teal'>Reason of Resignation</Label>
            <FormInput fluid  placeholder='Type here' />
        </Form.Field>



      )}

{showTerminatedField && (
        <Form.Field>
            <Label color='teal'>Date Of Termination</Label>
         <FormInput ref={ref}    type='date' />
        </Form.Field>



      )}
       {showTerminatedField && (
        <Form.Field>
            <Label color='teal'>Reason of Termination</Label>
            <FormInput fluid  placeholder='Type here' />
        </Form.Field>



      )}



{showRegularField && (
              <Form.Field>
                  <Label color='teal'>Date Of Regularization</Label>
               <FormInput ref={ref}    type='date' />
              </Form.Field>



            )}
      {showProjectBasedField && (
              <Form.Field>
                  <Label color='teal'>Start of Contract</Label>
               <FormInput ref={ref}    type='date' />
              </Form.Field>



            )}

{showProjectBasedField && (
              <Form.Field>
                  <Label color='teal'>End of Contract</Label>
               <FormInput ref={ref}    type='date' />
              </Form.Field>



            )}



        </FormGroup>





      
      
        <FormCheckbox label='I agree to the Terms and Conditions' />
       <FormButton color='blue'animated  type="submit">
            <Button.Content visible>Register</Button.Content>
            <Button.Content hidden>
              <Icon name="sign-in" />
            </Button.Content>
          </FormButton>
  </Form>
            <Message>
              Not Registered? <a href='#' onClick={() => props.onFormSwitch('dashboard')}>Click Here</a>
            </Message>

</Segment>
</Container>
</div>



      )
}


export default Register;