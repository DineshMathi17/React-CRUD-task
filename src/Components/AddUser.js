import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function AddUser({ user, setUser }) {
    const history = useHistory()
   
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState();
    const [batch, setBatch] = useState("");

    const addNewUser = () => {
        const newUser = {
            id,
            name,
            email,
            batch,
            age
        }
        console.log(newUser)
        setUser([...user, newUser])
        history.push("/")
    }

    return (
        <BaseApp
            title={"Create User"}
        >
            <div className="create">
                
                <div>
                <input
                    placeholder="id"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />
                </div>
               
                <div>
                <input
                    placeholder="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                </div>
                
                <div>
                <input
                    placeholder="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                </div>
               
                <div>
                <input
                    placeholder="age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />

                </div>
               
                <div>
                <input
                    placeholder="batch"
                    value={batch}
                    onChange={(event) => setBatch(event.target.value)}
                />
                </div>
                <button
                    onClick={addNewUser}
                >Add</button>
            </div>
        </BaseApp>
    )
}
