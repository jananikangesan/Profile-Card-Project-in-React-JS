import React from 'react'
import PropTypes from 'prop-types'

const userData=[
  {
    name:"James",
    city:"New York",
    description:"Front-end developer",
    skills:["UI/UX","Front End Development","HTML","CSS","Javascript","React","Node"],
    online:false,
    profile:"images/1.png",
  },
  {
    name:"Robert",
    city:"California",
    description:"Full stack web developer",
    skills:["Vlogging","web Development","HTML","CSS","Javascript","React","Angular"],
    online:false,
    profile:"images/2.png",
  },
  {
    name:"Nancy",
    city:"san Francisco",
    description:"Senior software developer",
    skills:["C","C++","Python","Java","Javascript","MySQL","MongoDB"],
    online:true,
    profile:"images/3.png",
  },
]

function User(props){
    return(
      <div className='card-container'>
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className='img' alt="user1"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className='buttons'>
          <button className='primary'>Message</button>
          <button className='primary outline'>Following</button>
        </div>
        <div className='skills'>
          <h6>Skills</h6>
          <ul>
           {props.skills.map((skill,index)=>
          <li key={index}>{skill}</li>)}
          </ul>

        </div>
     </div>
    ) 
}
export const UserCard = () => {
  return (
    <>
        {/* <User name="James" city="New York" description="Front-end developer" skills={["UI/UX","Front End Development","HTML","CSS","Javascript","React","Node"]} online={false} profile="images/1.png" /> */}

        {
          userData.map((user,index)=>(
            <User key={index} name={user.name} city={user.city} description={user.description} skills={user.skills} online={user.online} profile={user.profile} />
          ))
        }

    </>
  )
}

User.propTypes={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
  profile:PropTypes.string.isRequired,
};