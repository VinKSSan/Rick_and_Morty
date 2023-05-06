import { ConteinerCard } from "./stylesCard";

export function Card({image , name , gender, species}) {
    return (
        <>
            <ConteinerCard>
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <ul>
                        <li>{gender}</li>
                        <li>{species}</li>
                    </ul>
                </div>
            </ConteinerCard>
        </>
    )
}