import React, {useState} from 'react';
import axios from 'axios';
import NameCell from "./NameCell";
import UsernameCell from "./UsernameCell";
import EmailCell from "./EmailCell";
import AddressCell from "./AddressCell";
import PhoneCell from "./PhoneCell";
import WebsiteCell from "./WebsiteCell";
import CompanyCell from "./CompanyCell";

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

    const saveEdited = (userId, updatedUser) => {
        const updatedUsers = users.map(user => {
            if (user.id === userId) {
                return updatedUser
            } else
                return user;
        });
        setUsers(updatedUsers);
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
                            <NameCell columnName="name"
                                      user={user}
                                      saveEdited={saveEdited}/>
                            <UsernameCell columnName="username"
                                          user={user}
                                          saveEdited={saveEdited}/>
                            <EmailCell columnName="email"
                                       user={user}
                                       saveEdited={saveEdited}/>
                            <AddressCell columnName="address"
                                         user={user}
                                         saveEdited={saveEdited}/>
                            <PhoneCell columnName="phone"
                                       user={user}
                                       saveEdited={saveEdited}/>
                            <WebsiteCell columnName="website"
                                         user={user}
                                         saveEdited={saveEdited}/>
                            <CompanyCell columnName="company"
                                         user={user}
                                         saveEdited={saveEdited}/>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default App;
