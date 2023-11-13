import React from "react";
import styled from "styled-components";

import imagem from './img/R_M.png'

export const Cabecao = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#040011; 
    height: 25rem;   
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }  
    .container {  
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 60%;
        background-image: url(${imagem});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    @media(max-width:870px) {
        height: 20rem; 
    }
    @media(max-width:680px) {
        height: 18rem; 
        .container {  
            height: 100%;
            width: 100%;
        }
    }
    @media(max-width:390px) {
        height: 15rem; 
    }
`

export const Nav = styled.nav`
    width: 100%;
    height:100%;
    ul{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height:100%;
        width: 100%;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 2.0rem;
            .a{
                color: #4BB800;
                background-color: #17202A;
                padding: 1rem 2rem;
                font-size: 14pt;
                border-radius: 8px;
                transition: 0.3s;
                &:hover{
                    color: #17202A;
                    background-color: #4BB800;
                    transition: 0.3s;
                }  
            };
        };
    };   
    @media(max-width:480px) {
        ul{
            li{
                .a{
                    padding: 0.5rem 1rem;
                    font-size: 12pt;
                }
            }
        }    
    }    
    @media(max-width:380px) {
        ul{
            li{
                .a{
                    padding: 0.5rem 1rem;
                    font-size: 10pt;
                }
            }
        }    
    }   
`