import React from "react";
import {Link} from "react-router-dom"

import { Nav , Cabecao  } from "./styleMen";


export function Nave() {
    return (
        <>
            <Cabecao>
                <div className>
                    <img src="" alt="" />
                </div>
            </Cabecao>
            <Nav>
                <div>
                    <li> 
                        <Link to="/">Home</Link>
                    </li>
                </div>
                <div>
                    <li> 
                        <Link to="/Pers">Pers</Link>
                    </li>
                </div>
                <div>
                    <li> 
                        <Link to="/Logi">Logi</Link>
                    </li>
                </div>
            </Nav>
        </>
    )
}
