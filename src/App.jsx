import { useState } from 'react'

import './App.css'
import { LearnComponents } from './components/LearnComponents'
import { Header } from './components/Header'
import { Student } from './components/Student'
import { ChildComponent } from './components/ChildComponent'
import { ArraySample } from './components/ArraySample'
import { OneofSample } from './components/OneofSample'
import { MultiTypeComponent } from './components/MultiTypeComponent'
import { SampleFunction } from './components/SampleFunction'


function App() {

  const handleClick=()=>{
    alert("Button clicked");
  }

  const items=[
    {id:1,name:"item 1"},
    {id:2,name:"item 2"},
    {id:3,name:"item 3"},
   ]


  return (

      <>
       <div>Hello world</div>

       <LearnComponents/> 
       <Header/>

       <Student name="mala" age={20} isMarried={false}/>

       <Student name="ram" age={26} isMarried={true}/>

       <Student name="sara"/>


       <ChildComponent>
        <p>paragraph1</p>
        <p>paragraph2</p>
        <p>paragraph3</p>
       </ChildComponent>

       <ArraySample lists={items}/>

      <OneofSample color="red" />

      <MultiTypeComponent value="Hello"/>
      <MultiTypeComponent value={42}/>
      <MultiTypeComponent value={true}/>

      <SampleFunction handleClick={handleClick}/>
      
     
      </>

       

  )
}

export default App

