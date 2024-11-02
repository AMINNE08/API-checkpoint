import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setListOfUser(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {listOfUser.map(user => (
                    <li key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> {user.website}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
