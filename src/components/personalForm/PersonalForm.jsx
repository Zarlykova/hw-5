import React, { useState } from 'react'
import "./PersonalForm.css"

export const PersonalForm = ({addNewPersonalData}) => {
 const [inputName, setInputName] = useState("")
 const [inputAge, setInputAge] = useState()

 const addUserName = (e) => {
  setInputName(e.target.value)
 }

 const addUserAge = (e) => {
  setInputAge(e.target.value)
 }
 
 const submitData = () => {
  const allInfo = inputName + ' ' + ( inputAge );
  addNewPersonalData(allInfo)
 
  console.log(allInfo);
  setInputName('')
  setInputAge(0)
 }
 
 const disabledBtn = inputName.trim().length  || inputAge > 0 ? true : false;

// console.log(inputName);
  return (
    <div className='personal-form'>

     <label>Username</label>
     <input type="text" value={inputName}  onChange={addUserName}/>
     <label>Age (Years)</label>
     <input type="number" value={inputAge} onChange={addUserAge} />

     <button 
     className={disabledBtn ? 'btn-add__user' : 'disabled'}
      onClick={submitData}
      disabled={!disabledBtn} >Add User</button>

    </div>
  )
}
