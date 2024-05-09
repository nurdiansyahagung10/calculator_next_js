"use client"
import React, { useState } from 'react'

interface Props {
  params: string
  handleclick: any
  customclass: any
}


const Listtombol = ({ params,  handleclick, customclass }: Props) => {  
  const Data = ({params}:{params:string}) => {
    if (params == "b") {
      return <i className="fa-solid fa-delete-left"></i>
    } else if (params == "s") {
      return <i className="fa-solid fa-repeat"></i>
    } else if (params == "/") {
      return ":"
    } else if (params == "*") {
      return "X"
    } else if (params == ".") {
      return ","
    } else {
      return params
    }
  }

  
  return (
    <button value={params} className={' py-5 rounded-3xl bg-gradient-to-br text-xl  border-2 ' + customclass} onClick={handleclick} type='button' > <Data params={params} /> </button>
  )
}
export default Listtombol