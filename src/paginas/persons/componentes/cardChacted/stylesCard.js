import styled from "styled-components"

export const ConteinerCard = styled.div `
    width: 100%;
    background-color: #151020;
    border-radius: 4px;
    padding: 2rem;
    .image {
        width: 100%;
        height: 24.3rem;
        overflow: hidden;
        border-radius: 4px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }        

    }
    .info {
        margin-top: 1.6rem;
        h3 {
            font-size: 1.8rem;
            margin-bottom:0.8rem;
            color: white;

        }
        ul {
            list-style: none;
            display: flex;
            li {
                display: block;
                color: white;
                font-size: 1.4rem;
                &:last-child {
                    &:before {
                        content: "";
                        display: inline-block;
                        width: 0.4rem;
                        height: 0.4rem;
                        background-color: white;
                        opacity: 0.4;
                        border-radius:50%;
                        margin: 0 0.8rem;
                        vertical-align: middle;
                    }
                }
            }
        }
        
    }
`