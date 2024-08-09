import React from 'react'
import { useState } from 'react'

export const UserDetails = () => {
    const [userName,setUserName]=useState("Ram");
    const [userAge,setUserAge]=useState(21);

    const [user,setUser]=useState({name:"Ram",age:21});

    const updateUserName=()=>{
        userName=='Ram'?setUserName("Sam"):setUserName('Ram');
    }
    const updateUserAge=()=>{
        userAge==21 ? setUserAge(25):setUserAge(21);
    }

    const updateUser=()=>{
        setUser({...user,name:"mala", age:24})
    }
    function changeName(e){
        // const newStateObject= {...user};
        // newStateObject.name=e.target.value;
        // setUser(newStateObject);

        setUser((oldState)=>{
            return {...oldState,name:e.target.value}
        })

    }
    function changeAge(e)
    {
        setUser((oldState)=>{
            return {...oldState,[e.target.name]:e.target.value}
        })
    }
  return (
    <>
        <h1>User Details</h1>
        <h3>{userName}</h3>
        <h3>{userAge}</h3>
        <button onClick={updateUserName}>Update User Name</button>
        <button onClick={updateUserAge}>Update User Age</button>

        <h1>{user.name}</h1>
        <h3>{user.age}</h3>
        <button onClick={updateUser}>Update User</button>


        <form>
            <input type="text" placeholder='Enter user name' name="name"  value= {user.name} onChange={changeName}/>
            <input type="text" placeholder='Enter user age' name="age"  value={user.age}  onChange={changeAge}/>
        </form>
    </>
  )
}
