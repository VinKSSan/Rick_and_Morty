import styled from "styled-components";

export const S1 = styled.section`

    width: 100%;
    height: 130vh;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom: solid 1px  rgba(55, 255, 55, 0.615);
    .div2 {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.719);
        p {
                width: 100%;
                max-width: 109rem;
                line-height: bold;
                text-align: center;
                color: white;
                font-size: 1.6rem;
                margin-top: 1rem;
            }

    }
    .div1 {
        width: 110rem;
        height: 60rem;
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        background-color: rgba(0, 0, 0, 0.719);
        .div_info {
            width: 100%;
            height: 90%;
            padding: 0.5rem;
            max-width: 70rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items:center ;
            h1 {
                margin-bottom: 8rem;
                color: white;
                font-size: 25px;
                text-align: center;
            }
            p {
                line-height: bold;
                text-align: center;
                color: white;
                font-size: 1.6rem;
                margin-top: 1rem;
            }
        }
    }
`

export const CardImg = styled.div`
    width: 40%;
    height: 90%;
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
    .div_info2 {
        background-color: rgba(0, 0, 0, 0.719);
        width: 100%;
        height: 15%;
        display:flex;
        align-items: center;
        justify-content: center;
        span {
            text-align: center;
            font-size: 1.6rem;
            color: rgba(55, 255, 55, 0.615);
        }
    }
`

