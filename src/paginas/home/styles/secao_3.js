import styled from "styled-components";

export const S3 = styled.section`

    width: 100%;
    height: 130vh;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    .div1 {
        width: 110rem;
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
            }
        }
    }
`

export const ImagePrymary = styled.div`
    width: 100%;
    height: 100%;
    max-width: 120rem;
    max-height: 80rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .div_imag{
        width: 50%;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

