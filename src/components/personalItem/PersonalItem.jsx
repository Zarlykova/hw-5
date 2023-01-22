import React from 'react'
import "./PersonalItem.css"

export const PersonalItem = ({datas}) => {
   return (
    <li className='list-item'>{datas.name +  ' (years old)'}</li>

   )
}
