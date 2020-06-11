import React, {useState} from 'react';
import axios from 'axios';
import Name from "./Name";
import Username from "./Username";
import Email from "./Email";
import Address from "./Address";
import Phone from "./Phone";
import Website from "./Website";
import Company from "./Company";

function App() {
    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        /*fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json);
            })*/

        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        })
            .then((response) => {
                setUsers(response.data);
            });
    };

    return (
        <div className="container">
            <h2>Users</h2>

            <button className="btn btn-primary mb-3"
                    onClick={loadUsers}>
                Load Users
            </button>

            <table className="table table-bordered">
                {
                    users.length !== 0 &&
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">Company</th>
                    </tr>
                    </thead>
                }

                <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <Name user={user}/>
                            <Username user={user}/>
                            <Email user={user}/>
                            <Address user={user}/>
                            <Phone user={user}/>
                            <Website user={user}/>
                            <Company user={user}/>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default App;
