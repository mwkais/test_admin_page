import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';
import UrlField from './UrlField';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <UrlField source="url"/>
        </Datagrid>
    </List>
);
