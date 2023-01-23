import React from 'react'
import styles from "./PersonalItem.module.css"

export const PersonalItem = ({datas}) => {
   return (
    <li className={styles.listItem}>{datas.name +  ' (years old)'}</li>

   )
}
