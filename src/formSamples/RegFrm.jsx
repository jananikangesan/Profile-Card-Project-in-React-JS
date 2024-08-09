import React from 'react'
import { useState } from 'react'
import './RegFrm.css';


export const RegFrm = () => {

    const [user,setUser]=useState({
        name:"Ram Kumar",
        age:25,
        gender:"Male",
        isMarried:true,
        country:"India",
        bio:"write something about yourself",

    })

    function changeHandler(e){
        const name=e.target.name;
       const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
       setUser({...user,[name]:value})
    }

  return (
    <>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td>{user.isMarried? "Married":"Not Married"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <td>Bio</td>
                    <td>{user.bio}</td>
                </tr>
            </tbody>
        </table>

        <form>
            <input type="text" placeholder="full Name" value={user.name} onChange={changeHandler} name="name"/>
            <input type="number" placeholder="Age" value={user.age} onChange={changeHandler} name="age"/>
            <div className='gender'>
                <label htmlFor="male">
                    <input type="radio" name="gender" id="male" value="Male" checked={user.gender=="Male"} onChange={changeHandler}/>
                    Male
                </label>
                <label htmlFor="female">
                    <input type="radio" name="gender" id="female" value="Female" checked={user.gender=="Female"} onChange={changeHandler}/>
                    Female
                </label>
            </div>
            <label htmlFor='isMarried'>
                <input type="checkbox" id="isMarried"  name="isMarried" checked={user.isMarried} onChange={changeHandler}/>
                Is Married
            </label>
            <div className='select-div'>
                <label htmlFor='country'>Select Country:</label>
                <select name="country" id="country" value={user.country} onChange={changeHandler}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
            </div>
            <textarea name="bio" id="bio" cols="30" rows="5" placeholder='write about you' value={user.bio} onChange={changeHandler}></textarea>
        </form>
    </>
  )
}
