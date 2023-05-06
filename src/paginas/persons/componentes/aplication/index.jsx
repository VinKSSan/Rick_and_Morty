import { useEffect , useState } from "react";
import { ContentCharacters, HeaderApp, ConteinerApp, Loader } from "../../styles/aplicatonsStyles";
import { Card } from "../cardChacted/cards";

import loader from "../../assets/loader.gif"

import axios from "axios";

export function Aplication()  {

    const [charac , setCharac] = useState([])

    const [pagina , setPagina] = useState(1)

    const [contPagina , setContPagina] = useState('')

    const [contPerso , setContPerso] = useState('')

    const [isLoader , setIsLoadar] = useState(true)

    function mudarPagina() {
        setPagina(pagina +1)
    }
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        .then(response => {
            const array = [...charac, ...response.data.results]
            setCharac(array)
            setContPagina(response.data.info.pages)
            setContPerso(response.data.info.count)
            setIsLoadar(false)
        })
    }, [pagina])

    return ( 
        <>
            {
                (isLoader) && (
                    <Loader>
                        <img src={loader} alt="" />
                    </Loader>
                )
            }

            <ConteinerApp>     
                <HeaderApp>
                    <h1>Rick and Morty</h1>
                    <span>Numero de personagen:{contPerso}</span>
                </HeaderApp>
                <ContentCharacters>
                    <div>
                        {
                            charac && charac.map(({image , name , species , gender}) => {
                                
                                return(  
                                    <Card
                                        key={name}
                                        image={image}   
                                        name={name} 
                                        species={species} 
                                        gender={gender}
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        (pagina!==contPagina) && <button onClick={() => mudarPagina()}>Carregar mais</button>
                    }
                </ContentCharacters>
            </ConteinerApp>
        </>
    )
}