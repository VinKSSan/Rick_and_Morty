import styled from "styled-components";

export const S2 = styled.section`

    width: 100%;
    height: 130vh;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .info1 {
        background-color: rgba(0, 0, 0, 0.719);
        width: 100%;
        max-width: 110rem;
        margin: 0 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1 {
            margin-bottom: 2rem;
            color: white;
            font-size: 25px;
            text-align: start;
        }
        
        p {
            text-align: center;
            color: white;
            font-size: 1.6rem;
        }

    }
    .div1 {
        width: 110rem;
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.719);
        .info2 {
            width: 100%;
            max-width: 70rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items:center ;
            h1 {
                margin-bottom: 5rem;
                color: white;
                font-size: 25px;
                text-align: center;
            }
            p {
                text-align: center;
                color: white;
                font-size: 1.6rem;
            }
        }
    }
`

export const ImagePrymary = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100rem;
    max-height: 60rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .div_ima{
        background-color: white;
        width: 100%;
        height: 90%;
        img {
            width: 100%;
            height: 100%;
        }
    }
`

