import React, { useState } from "react";
import icon_menu from "./../images/icon-mobile.svg"
import { MeSec , ModMen ,  } from "../styles/botaoSecao";

export function BtnSecHom() {
    const [isMode , setIsMode] = useState(false)

    function btnFuc() {
        setIsMode(!isMode)
    }

    return(
        <MeSec >
             <div className="BtnMen">
                <button onClick={() => btnFuc()}>
                    <img src={icon_menu} alt="" />
                </button>
            </div>
            <ModMen disp={isMode}>
                <div className="secaoNav prymary">
                    <span>sobre a série</span>
                </div>
                <div className="secaoNav second">
                    <span>sobre o desenvolvimento</span>
                </div>
                <div className="secaoNav terna">
                    <span>a história da série</span>
                </div>
            </ModMen>
        </MeSec>
    )
}