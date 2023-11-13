import React from "react";

import { S1 , CardImg ,  } from "../styles/secao_1";

import Back_ima from "./../images/rick_and_morty_s4_image.0.webp"

import Card_ima from "./../images/capa_1temp.webp"
export function Sec_1() {
    return(
        <S1 id="S1" image={Back_ima}>
            <div className="div1">
                 <div className="div_info">
                    <h1>Sobre Rick and Morty</h1>
                    <p>   Rick and Morty é uma série animada americana de ficção científica e comédia adulta criada por Justin Roiland e Dan Harmon. A série segue as aventuras de Rick Sanchez, um cientista alcoólatra e genial, e seu neto Morty Smith, um jovem aparentemente comum, mas que acaba se envolvendo em loucas e perigosas viagens interdimensionais com seu avô.</p>
                    <p>A série é conhecida por seu humor ácido, situações absurdas e referências a cultura pop. Além disso, a trama aborda temas complexos como a existência, a identidade, o livre-arbítrio e a moralidade, com profundidade e originalidade.</p>
                    <p>Desde sua estreia em 2013, Rick and Morty ganhou uma enorme base de fãs e aclamação da crítica, sendo elogiada por sua inventividade, criatividade e abordagem inteligente à ficção científica. A série já ganhou vários prêmios, incluindo um Emmy de Melhor Animação em 2020.</p>
                    <p>Se você ainda não assistiu, vale a pena conferir essa série que é considerada por muitos como uma das melhores da atualidade.</p>
                </div>
                <CardImg >
                    <div className="div_ima">
                        <img src={Card_ima} alt="" />
                    </div>
                    <div className="div_info2">
                        <span>Capa da primeira temporada de Rick and Morty, exibida pelo Adult Swim</span>
                    </div>
                </CardImg>
            </div>
            <div className="div2">
                <p> Rick and Morty ganhou fama por vários motivos. Um dos principais é o seu humor irreverente e ácido, que conquistou uma grande base de fãs. Além disso, a série apresenta uma mistura única de ficção científica, comédia e crítica social, o que a torna bastante original.</p>
                <p>Outro fator que contribuiu para a fama de Rick and Morty foi a forma como a série foi divulgada e distribuída. Inicialmente, a série foi criada por Dan Harmon e Justin Roiland e exibida pelo canal Adult Swim, uma divisão noturna da Cartoon Network voltada para um público mais adulto. A série foi lançada em 2013, mas inicialmente não fez muito sucesso.</p>
                <p>A partir da terceira temporada, a série se tornou um fenômeno de culto, com milhões de fãs em todo o mundo. A série também ganhou vários prêmios e indicações, incluindo o Primetime Emmy Award de Melhor Programa de Animação em 2018. Hoje em dia, Rick and Morty é uma das séries mais populares e influentes da cultura pop, e continua a conquistar novos fãs a cada dia.</p>
            </div>
        </S1>
    )
}