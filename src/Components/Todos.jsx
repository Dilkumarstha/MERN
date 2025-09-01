import { useEffect } from "react";
import { useState } from "react";

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setUsers(data))

    }, [])
if(users.length==0) return <div>loading...</div>


    return (
        <div>
            <h1>Todos List</h1>
           <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>username</td>
                    <td>email</td>
                    <td>address</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                    </tr>
                    ))
                }
            </tbody>
           </table>
        </div>
    )
}
export default Users;