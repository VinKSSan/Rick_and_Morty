import styled from "styled-components";

export const S1 = styled.section`

    width: 100%;
    height: auto;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom: solid 2px  rgba(55, 255, 55, 0.615);
    padding-bottom: 2rem;
    .div2 {
        width: 85%;
        padding: 0.5rem 0.5rem 1rem 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.719);
        p {
            text-indent: 1rem;
            width: 95%;
            line-height: bold;
            text-align: justify;
            color: azure;
            font-size: 1.6rem;
            margin-top: 1rem;
        }

    }
    .div1 {
        width: 85%;
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        background-color: rgba(0, 0, 0, 0.719);
        
        .div_info {
            width: 70%;
            padding: 0.5rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items:center ;
            h1 {
                margin-bottom: 4rem;
                color: aliceblue;
                font-size: 21pt;
                text-align: center;
            }
            p {
                text-indent: 1rem;
                line-height: bold;
                text-align: justify;
                color:azure;
                font-size: 12pt;
                margin-bottom: 1rem;
            }
        }
    }
    @media(max-width:960px) {
        .div1 {
            justify-content: center;
            flex-direction: column;
        }
        .div_info {
            width: 95% !important;
            h1 {
                font-size: 21pt;
            }
            p {
                font-size: 12pt;
                margin-bottom: 1rem;
            }
        }
    }
`

export const CardImg = styled.div`
    width: 28%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    

    .div_ima{
        background-color: white;
        width: 100%;
        img {
            
            width: 100%;
            height: auto;
        }
    }
    .div_info2 {
        background-color: rgba(0, 0, 0, 0.719);
        width: 100%;
        display:flex;
        align-items: center;
        span {
            text-align: center;
            font-size: 11pt;
            color: rgba(55, 255, 55, 0.615);
        }
    }
    @media(max-width:960px) {
        width: 50%;
    }
    @media(max-width:480px) {
        width: 80%;
    }
`

