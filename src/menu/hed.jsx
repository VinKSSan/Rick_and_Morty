import React from "react";
import {Link} from "react-router-dom"

import { Nav , Cabecao  } from "./styleHed";

export function Hed() {
    return (
        <Cabecao>
            <div className="container">
                <Nav>
                    <ul>
                        <li>
                            <Link className="a" to="/">Home</Link>
                        </li>
                        <li>
                            <Link  className="a" to="/Pers">Personagens</Link>
                        </li>
                        <li>
                            <Link  className="a" to="/Logi">Cadastrar</Link>
                        </li>
                    </ul>
                </Nav>
            </div> 
        </Cabecao>
    )
}
