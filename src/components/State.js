import React, { useState } from 'react'

export default function State() {

    const [users, setUser] = useState([{name: "imran", age: 42, country: "Pakistan"},]);

    const submitForm = (e) => {
        const user = {
            name: "Irfan",
            age: 40,
            country: "United Kingdom",
        };
        setUser([...users, user]);
    };
    return (
        <div>
            
       
           {users.map((user, index) => {
               return (
               
               <div key={index}>

                <h2>{user.name} - {user.age}</h2>
                <p>{user.country}</p>
               </div>);
           })}

       <button onClick={submitForm}>Add User</button>
        
        </div>
    )
}
