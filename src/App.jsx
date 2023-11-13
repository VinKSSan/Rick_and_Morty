import React from "react"
import { BrowserRouter} from "react-router-dom"

import {yupResolver} from '@hookform/resolvers/yup'

import { Routers } from "./paginas/roters"

import { Hed } from "./menu/hed"
import { Roda } from "./ropé/rodape"


export const Yres = {yupResolver}


function App() {
  return (
      <BrowserRouter>
        <Hed/>
        <Routers/>
        <Roda/>
      </BrowserRouter>  
  )
}

export default App
