import React from 'react';
import { List, Edit, Create, Filter, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="name" source="name" allowEmpty>
            <SelectInput source="name" />
        </TextInput>

    </Filter>
);

export const UserList = (props) => (
    <List  {...props} filters={<UserFilter />}>
        <Datagrid>
            <TextField source="npn" />
            <TextField source="name" />
            <TextField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserName = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserName />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="npn" />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);
