import React from 'react';
import { jsonServerRestClient, simpleRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import { UserList, UserEdit, UserCreate} from './users';

const App = () => (
    <Admin restClient={simpleRestClient('http://localhost:3001')}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete}/>
    </Admin>
);

export default App;
