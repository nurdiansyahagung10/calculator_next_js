import React, { ChangeEvent, useEffect, useRef } from 'react'

interface Props {
  params:string
  history?:string
  tema:string  
}


export default function Inputangkaawal({params, history, tema}:Props) {
  var setisi = '0'
  if(params != ''){
    setisi = params  
   }

   const inputref = useRef<HTMLInputElement>(null)

   useEffect(()=>{
    if(inputref.current){
      inputref.current.scrollLeft = inputref.current.scrollWidth
     }
  
   }
   )
  
  return (
    <form className='mt-auto w-full  '>
      <input ref={inputref} readOnly className={`text-6xl outline-none text-end overflow-x-scroll overflow-y-hidden whitespace-nowrap bg-transparent border-0 w-full  ${tema == 'day' ? "  text-slate-600" : ""}${tema == 'night' ? "text-white" : ""}`}  value={setisi}/>
    </form>
  )
}
