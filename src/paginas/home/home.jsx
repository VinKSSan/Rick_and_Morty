import React from "react"

import GlobalStyle from "./hoStyle"

import { BtnSecHom } from "./components/botaoScao"
import { Sec_1 } from "./components/secao_1"
import { Sec_2 } from "./components/secao_2"
import { Sec_3 } from "./components/secao_3"
function Home() {

  return (
    <>
      <GlobalStyle/>
      <BtnSecHom/>
      <Sec_1/>
      <Sec_2/>
      <Sec_3/>
    </>
  )
}

export default Home