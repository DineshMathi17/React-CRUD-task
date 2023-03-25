import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import BaseApp from '../Core/Base';

const EditUser = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [idx, setIdx] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [batch, setBatch] = useState("");

  const { id } = useParams();
  const history = useHistory()

  const selectedUser = user.find((per) => per.id === id);

  useEffect(() => {
    setIdx(selectedUser.id)
    setName(selectedUser.name)
    setEmail(selectedUser.email)
    setAge(selectedUser.age)
    setBatch(selectedUser.batch)

  }, []);

  //
  const updateUser = () => {
    // step 1 : collecting new data
    const editIndex = user.findIndex(per => per.id === id)
    console.log(editIndex)
    //chnaged data in the input field
    const editedData = {
      id: idx,
      name,
      email,
      age,
      batch
    }
    //updating the user
    user[editIndex] = editedData
    setUser([...user]);
    history.push("/");
  }

  return (
    <BaseApp
      title={" edit-profile"}
    >
      <div className="edit-profile">
        
        <div>
        <input
          placeholder="id"
          value={idx}
          onChange={(event) => setIdx(event.target.value)}
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
          onClick={updateUser}
        >Edit</button>
      </div>
    </BaseApp>
  )
}

export default EditUser