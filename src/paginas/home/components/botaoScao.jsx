import React, { useState } from "react";
import icon_menu from "./../images/icon-mobile.svg"
import { MeSec , ModMen ,  } from "../styles/botaoSecao";
import { Link } from "react-scroll";

export function BtnSecHom() {
    const [isMode , setIsMode] = useState(false)

    function btnFuc() {
        setIsMode(!isMode)
    }

    return(
        <MeSec >
             <div className="BtnMen">
                <button id="ibtnMen" onClick={() => btnFuc()}>
                    <img src={icon_menu} alt="" />
                </button>
            </div>
            <ModMen disp={isMode}>
                <div className="secaoNav prymary">
                    <Link
                        to="S1"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800} 
                    >
                        <span>a série</span>
                    </Link>
                </div>
                <div className="secaoNav second">
                    <Link
                        to="S2"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    >
                        <span>desenvolvimento</span>
                    </Link>
                </div>
                <div className="secaoNav terna">
                    <Link
                        to="S3"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    >
                        <span>história</span>
                    </Link>
                </div>
                <div className="secaoNav terna">
                    <Link
                        to="S4"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                    >
                        <span>Rodapé</span>
                    </Link>
                </div>
            </ModMen>
        </MeSec>
    )
}