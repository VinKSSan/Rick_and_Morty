import React from "react";

import { S2 , ImagePrymary ,  } from "../styles/secao_2";

import Back_ima from "./../images/Rick_and_Morty_personagens2.jpg"

import Cimage from "./../images/criador_rick.jpg"

export function Sec_2() {
    return(
        <S2  id="S2" image={Back_ima}>
            <div className="div1">
                <div className="info1">
                    <h1>O desenvolvimento de Rick and Morty</h1>
                </div>
                <ImagePrymary >
                    <div className="div_ima">
                        <img src={Cimage} alt="" />
                    </div>
                </ImagePrymary>
                <div className="info2">
                    <h2>introdução a difusão de rick and morty</h2>
                    <p>   Rick and Morty é uma série animada americana de ficção científica e comédia adulta criada por Justin Roiland e Dan Harmon. A série segue as aventuras de Rick Sanchez, um cientista alcoólatra e genial, e seu neto Morty Smith, um jovem aparentemente comum, mas que acaba se envolvendo em loucas e perigosas viagens interdimensionais com seu avô.</p>
                </div>
            </div>
        </S2>
    )
}