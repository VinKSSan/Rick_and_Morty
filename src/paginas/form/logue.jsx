import React, { useState } from 'react'
import style from './form.module.css'

import { SecLog } from './sectionLog'

import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  nome: yup.string().required("digite seu nome") , 
  email: yup.string().required("digite seu email").email("email considerado inválido, tente outro"),
  senha: yup.string().required("digite uma senha") ,
  senha_conf: yup.string().required("cofirme sua senha").oneOf([
    null , yup.ref('senha')], 'as senhas não conferem') 
}).required();


export function Logue() {
  const [isSucess, setIsSucess] = useState(false)

  const { register , handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmi = () => {
    setIsSucess(true)
    console.log('formulário enviado')
  }

  return (
    <SecLog>
      <form onSubmit={handleSubmit(onSubmi)} className={style.Formulario}>
        <div className={style.formGroup}>
        <span className={style.labelError}>{errors.nome?.message}</span>
          <input 
            className={(errors.nome)? `${style.inputError}` : ''}
            type="text" 
            placeholder="insira seu nome"
            {...register("nome")}
          />
        </div>
        
        <div className={style.formGroup}>
        <span className={style.labelError}>{errors.email?.message}</span>
          <input 
            className={(errors.nome)? `${style.inputError}` : ''}
            type="email" 
            placeholder="insira seu email"
            {...register("email")}
          />
        </div>
        
        <div className={style.formGroup}>
        <span className={style.labelError}>{errors.senha?.message}</span>
          <input 
            type="password" 
            placeholder="insira sua senha"
            {...register("senha")}
          />
        </div>
       
        <div className={style.formGroup}>
        <span className={style.labelError}>{errors.senha_conf?.message}</span>
          <input 
            type="password" 
            placeholder="confirme sua senha"
            {...register("senha_conf")}
          />
        </div>
        <button type="submit">enviar formulário</button>


        {
          isSucess &&  <p>formulário enviado com sucesso</p>
        }
      </form>
    </SecLog>
  )
}

 
