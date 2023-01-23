import React, { useState } from 'react'
import styles from"./PersonalForm.module.css"

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
    <div className={styles.personalForm}>

     <label className={styles.personalFormLabel}>Username</label>
     <input className={styles.personalFormInput} type="text" value={inputName}  onChange={addUserName}/>
     <label className={styles.personalFormLabel}>Age (Years)</label>
     <input className={styles.personalFormInput}  type="number" value={inputAge} onChange={addUserAge} />

     <button 
     className= {disabledBtn ? styles.btnAddUser : styles.disabled}
      onClick={submitData}
      disabled={!disabledBtn} >Add User</button>

    </div>
  )
}
