import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Home.css'
import { UserContext } from './UserContext/UserContext'
const Home = () => {
    const [users, setUsers] = useContext(UserContext);
    console.log(users);
    return (
        <div>
            My Crud Operation
            <Link to={"/create"}>
                <Button className='button' variant="info">Create User</Button>
            </Link>
            <Table striped bordered hover className='body'>
                <thead>
                    <tr>

                        <th>Id</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.position}</td>
                            <td>{user.salary}</td>
                            <td>
                                <Link to={"/read/" + user.id}>
                                    <Button className="action__btn" variant="success">
                                        Read
                                    </Button>
                                </Link>
                                <Link to={"/edit/" + user.id}>
                                    <Button className="action__btn" variant="warning">
                                        Edit
                                    </Button>
                                </Link>

                                <Link to={"/delete/" + user.id}>
                                    <Button className="action__btn" variant="danger">
                                        Delete
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div >
    );
};

export default Home;