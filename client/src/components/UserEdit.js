import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

function UserEdit(props) {
    return (
       <Edit title='Edit a Post' {...props}>
           <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='name' />
                <TextInput source='email' />
           </SimpleForm>
       </Edit>
    );
}

export default UserEdit;