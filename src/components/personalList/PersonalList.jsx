import React from 'react'
import { PersonalItem } from '../personalItem/PersonalItem'
import styles from "./PersonalList.module.css"

export const PersonalList = ({data}) => {
  return (
    <ul className={styles.personalList}>
     {
      data.map((elem) =>(
      <PersonalItem datas={elem} key={elem.name}/>
      ))
     }
    </ul>
  )
}
