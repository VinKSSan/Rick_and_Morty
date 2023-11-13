import React from "react";

import { S3 , ImagePrymary ,  } from "../styles/secao_3";

import Back_ima from "./../images/rpers.3.jpg"

import CaImage from "./../images/rick_robo_sex.jpg"

export function Sec_3() {
    return(
        <S3  id="S3" image={Back_ima}>
            <div className="div1">
                <h1>A história de Rick and Morty</h1>
                <ImagePrymary >
                    <div className="div_imag">
                        <img src={CaImage} alt="" />
                    </div>
                </ImagePrymary>
                <div className="info">
                    <p>   Rick and Morty é uma série animada americana de ficção científica e comédia adulta criada por Justin Roiland e Dan Harmon. A série segue as aventuras de Rick Sanchez, um cientista alcoólatra e genial, e seu neto Morty Smith, um jovem aparentemente comum, mas que acaba se envolvendo em loucas e perigosas viagens interdimensionais com seu avô.</p>
                </div>
            </div>
        </S3>
    )
}