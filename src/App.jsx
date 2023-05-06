import React from "react"
import { BrowserRouter} from "react-router-dom"

import {yupResolver} from '@hookform/resolvers/yup'

import { Routers } from "./paginas/roters"

import { Nave } from "./menu/menu"
import { Roda } from "./ropé/rodape"


export const Yres = {yupResolver}


function App() {

  
  return (
  
      <BrowserRouter>
        <Nave/>
        <Routers/>
        <Roda/>
      </BrowserRouter>  
  )
}

export default App
