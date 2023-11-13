import React from "react";

import { Foter } from "./styleFot";


export function Roda() {
    return (
        <Foter id="S4">
            <div className="all">       
                <div className="top-footer">
                    <a className="logo" alt="">
                        <h1> Fans de Rick and Morty</h1>
                    </a> 
                    <div className="faça_parte">
                        <span>Fique por dentro de tudo sobre Rick and Morty</span>
                        <ul className="item">
                            <li> 
                                <p><a href="">Inscreva-se na página</a></p>
                            </li>
                            <li> 
                                <p><a href="">saiba mais sobre rick and morty</a></p>
                            </li>
                            <li> 
                                <p><a href="">assista os episodios da série</a></p>
                            </li>
                            <li> 
                                <p><a href="">conheça os desenvolvedores</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="area">
                    <nav id="nav">
                        <div className="item">
                            <strong>Nossa página</strong>
                            <ul>
                                <li><a href="">Conheça melhor nossa página</a></li>
                                <li><a href="">ajude-nos a melhorar</a></li>
                                <li><a href="">Termos de uso</a></li>
                            </ul>
                        </div>
                    </nav> 
                </div>
            </div>
        </Foter>
    ) 
}
