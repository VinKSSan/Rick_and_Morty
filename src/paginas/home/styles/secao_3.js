import styled from "styled-components";

export const S3 = styled.section`

    width: 100%;
    padding: 1rem 0.2rem;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom: solid 2px  rgba(55, 255, 55, 0.615);
    
    .div1 {
        width: 90%;
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.719);
        h1 {
                margin-bottom: 2rem;
                color: white;
                font-size: 25px;
                text-align: center;
            }
        .info {
            width: 100%;
            max-width: 70rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items:center ;
           
            p {
                text-align: center;
                color: white;
                font-size: 1.6rem;
                margin-top: 1.5rem;
            }
        }
    }
`

export const ImagePrymary = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .div_imag{
        width: 60%;
        img {
            width: 100%;
            height: auto;
        }
    }
    @media(max-width:480px) {
        .div_imag{
            width: 80%;
        }    
    }
`

