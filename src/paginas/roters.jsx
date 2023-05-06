import {Routes, Route} from "react-router-dom"
import Logi from "./form/log"
import Home from "./home/home"
import Pers from "./persons/personagens"

export function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Logi' element={<Logi/>}/>
            <Route path='/Pers' element={<Pers/>}/>
        </Routes>

    )
}