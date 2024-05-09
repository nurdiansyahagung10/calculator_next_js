"use client"
import Inputangkaawal from "@/components/inputangkaawal";
import Listtombol from "@/components/listtombol";
import { promises } from "dns";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Sectionpangkat from "./sectionpangkat";

var tombol = [
  'C', 'b', 's', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '3', '2', '1', '+',
  '0', '.', '='
]
export default function Home() {
  const [history, sethistory] = useState<string[]>([])
  const [isi, setisi] = useState('')
  const [pangkat, setpangkat] = useState('pangkat')
  const [tema, settema] = useState('day')
  const [value, setvalue] = useState('')
  const isitrim = isi.trim()
  const valuearray = value.split(' ')
  const lastchar = isitrim.slice(0, -1)
  const operators = ['X', ':', '+', '-']
  const op= /[X:+\-⁰¹²³⁴⁵⁶⁷⁸⁹]/;
  const p= /0\[⁰¹²³⁴⁵⁶⁷⁸⁹]/;
  const operatorpangkat = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹',]
  const divRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  });

  const Clearall = () => {
    setisi('')
    setvalue('')
    sethistory(prevhistory => [])
  }

  const Result = () => {
    if (operators.includes(isi.slice(-1))) {
      if (op.test(lastchar)) {
        sethistory(prevhistory => [...prevhistory, lastchar])
      }
    } else if (op.test(isi)) {
      sethistory(prevhistory => [...prevhistory, isi])
    }

    var newisi = ''
    valuearray.map((element) => {
      if (element == '0' || p.test(element)) {
        newisi += ` ${element}`

      } else {
        newisi += ` ${element.replace(/^0+/, '')}`

      }
    })

    const optp = Sectionpangkat(newisi)

    if (operators.includes(optp.trim().slice(-1))) {

      setisi((eval(optp.trim().slice(0, -1).toString())).toString().replace(/\./g, ','))
      setvalue(eval(optp.trim().slice(0, -1).toString()).toString())

    } else {

      setisi((eval(optp.toString())).toString().replace(/\./g, ','))
      setvalue(eval(optp.toString()).toString())

    }

  }

  const Handlerkoma = (valuebutton: string, isibutton: string) => {
    if (isi.slice(-1) == '') {
      setvalue(previsi => previsi + `0${valuebutton}`)
      setisi(previsi => previsi + `0${isibutton}`)
    }
    else if (valuearray[valuearray.length - 1].includes('.')) {

    }
    else if (operators.includes(isi.slice(-1))) {
      setisi(previsi => previsi + ` 0${isibutton}`)
      setvalue(previsi => previsi + ` 0${valuebutton}`)
    } else if (isi.slice(-1) == ',') {
    } else {
      setisi(previsi => previsi + isibutton)
      setvalue(previsi => previsi + valuebutton)
    }
  }

  const Setpangkat = () => {
    if (pangkat == "pangkat") {
      tombol = [
        'C', 'b', 's', '/',
        '⁷', '⁸', '⁹', '*',
        '⁴', '⁵', '⁶', '-',
        '³', '²', '¹', '+',
        '⁰', '.', '='
      ]
      setpangkat('')

    } else {
      tombol = [
        'C', 'b', 's', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '3', '2', '1', '+',
        '0', '.', '='
      ]

      setpangkat('pangkat')

    }
  }

  const Handlerclickmain = (valuebutton:string, isibutton:string) => {
    if (isi.slice(-1) == '') {
      if (operators.includes(isibutton)) {
        setisi(previsi => previsi + `0 ${isibutton}`)
        setvalue(previsi => previsi + `0 ${valuebutton}`)
      } else if (operatorpangkat.includes(isibutton)) {
        setisi(previsi => previsi + `0${isibutton}`)
        setvalue(previsi => previsi + `0${valuebutton}`)
      } else {
        setisi(previsi => previsi.trim() + isibutton)
        setvalue(previsi => previsi.trim() + valuebutton)
      }
    }
    else if (isi.slice(-1) == ' ') {
      if (operators.includes(isitrim.slice(-1))) {
        if (operators.includes(isibutton)) {
          setisi(previsi => previsi.slice(0, -1) + isibutton)
          setvalue(previsi => previsi.slice(0, -1) + valuebutton)
        }
        else if (operatorpangkat.includes(isibutton)) {
          setisi(previsi => previsi.trim() + isibutton)
          setvalue(previsi => previsi.trim() + valuebutton)
        } else {
          setisi(previsi => previsi.trim() + isibutton)
          setvalue(previsi => previsi.trim() + valuebutton)
        }
      } else {
        if (operators.includes(isibutton)) {
          setisi(previsi => previsi + isibutton)
          setvalue(previsi => previsi + valuebutton)
        }
        else if (operatorpangkat.includes(isibutton)) {
          setisi(previsi => previsi.trim() + isibutton)
          setvalue(previsi => previsi.trim() + valuebutton)
        } else {
          setisi(previsi => previsi.trim() + isibutton)
          setvalue(previsi => previsi.trim() + valuebutton)
        }

      }
    }
    else if (operatorpangkat.includes(isi.slice(-1))) {
      if (operators.includes(isibutton)) {
        setisi(previsi => previsi + ` ${isibutton}`)
        setvalue(previsi => previsi + ` ${valuebutton}`)
      }
      else if (operatorpangkat.includes(isibutton)) {
        setisi(previsi => previsi + isibutton)
        setvalue(previsi => previsi + valuebutton)
      }
      else {
        setisi(previsi => previsi + ` X ${isibutton}`)
        setvalue(previsi => previsi + ` * ${valuebutton}`)
      }
    }
    else if (operators.includes(isi.slice(-1))) {
      if (operators.includes(isibutton)) {
        setisi(previsi => previsi.slice(0, -1) + isibutton)
        setvalue(previsi => previsi.slice(0, -1) + valuebutton)
      }
      else if (operatorpangkat.includes(isibutton)) {
        setisi(previsi => previsi + ` 0${isibutton}`)
        setvalue(previsi => previsi + ` 0${valuebutton}`)
      } else {
        setisi(previsi => previsi + ` ${isibutton}`)
        setvalue(previsi => previsi + ` ${valuebutton}`)
      }
    } else if (isi.slice(-1) == ',') {
      if (operatorpangkat.includes(isibutton)) {
        setisi(previsi => previsi + `0 ${isibutton}`)
        setvalue(previsi => previsi + `0 ${valuebutton}`)
      }
      else if (operatorpangkat.includes(isibutton)) {
        setisi(previsi => previsi.slice(0, -1) + `${isibutton}`)
        setvalue(previsi => previsi.slice(0, -1) + `${valuebutton}`)
      } else {
        setisi(previsi => previsi + isibutton)
        setvalue(previsi => previsi + valuebutton)
      }
    } else {
      if (operators.includes(isibutton)) {
        setisi(previsi => previsi + ` ${isibutton}`)
        setvalue(previsi => previsi + ` ${valuebutton}`)
      } else {
        setisi(previsi => (previsi + isibutton).trim())
        setvalue(previsi => (previsi + valuebutton).trim())
      }
    }

  }

  const Backspace = () => {
    setisi(previsi => previsi.slice(0, -1))
    setvalue(previsi => previsi.slice(0, -1))
  }

  const getvaluebutton = (e: any) => {
    const isibutton = e.currentTarget.textContent.trim()
    const valuebutton = e.currentTarget.value.trim()

    switch (valuebutton) {
      case 'C':
        Clearall()
        break
      case '=':
        Result()
        break
      case 's':
        Setpangkat()
        break
      case 'b':
        Backspace()
        break
      case ',':
        Handlerkoma(valuebutton, isibutton)
        break
      default:
        Handlerclickmain(valuebutton, isibutton)
        break
    }
  }


  const switchtheme = () => {
    settema((prevTheme) => (prevTheme === "night" ? "day" : "night"));
  }



  return (
    <main className={`container p-3 mx-auto overflow-hidden flex relative justify-between flex-col ${tema == 'day' ? "bg-gradient-to-br from-white to-slate-200" : ""}${tema == 'night' ? "bg-gradient-to-br from-slate-800 to-slate-950" : ""}`} style={{ height: '100vh' }}>
      <section className=" absolute mt-3 h-0 top-0 grid grid-cols-4 w-full gap-3">
        <button onClick={switchtheme} className={`py-4 rounded-t-3xl rounded-e-3xl text-xl border-2  border-none ${tema == 'day' ? " bg-slate-300 text-slate-600" : ""}${tema == 'night' ? "bg-slate-700 text-white" : ""}`} type='button' >{tema == "night" ? <i className="fa-solid fa-sun"></i> : ''}{tema == "day" ? <i className="fa-solid fa-moon"></i> : ''}</button>
      </section>
      <section ref={divRef} className="overflow-y-scroll h-full">
        <div className="justify-end text-end flex-col flex">
          {history.map((params: string, index: number) => {
            return (
              <span className={`text-lg whitespace-nowrap w-full ${tema == 'day' ? " text-slate-400" : ""}${tema == 'night' ? "text-slate-300" : ""}`} key={index}>{params}</span>
            )
          })}
        </div>
      </section>
      <section className="pb-4 flex ">
        <Inputangkaawal params={isi} tema={tema} />
      </section>
      <section className="grid grid-cols-4 gap-3 ">

        {tombol.map((btn: string, index: number) => {
          var customclass = ''
          if (index == 16) {
            customclass = 'col-span-2'
          }

          if (index >= 0 && index <= 2) {
            customclass += ` ${tema == 'day' ? "from-slate-400 to-slate-300 border-slate-400 text-slate-600" : ""}${tema == 'night' ? "from-slate-700 text-white to-slate-500 border-slate-500" : ""}`
          } else if (index == 3 || index == 7 || index == 11 || index == 15 || index == 18) {
            customclass += " from-orange-700 to-orange-500 border-orange-500 text-white"
          } else {
            customclass += `  ${tema == 'day' ? "from-slate-300 to-white border-slate-300 text-slate-600" : ""}${tema == 'night' ? "from-gray-800 to-gray-600 border-gray-600 text-white" : ""}`

          }
          return (
            <Listtombol key={index} params={btn} customclass={customclass} handleclick={getvaluebutton} />

          )
        })}
      </section>
    </main>
  );
}
