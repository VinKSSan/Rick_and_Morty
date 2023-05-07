import styled from "styled-components";


export const ConteinerApp= styled.div `
    width: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 4rem 1.6rem;
`
export const HeaderApp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    margin-bottom:1.6rem ;
    border-bottom: 1px solid rgba(255,255, 255, 0.1);
    h1 {
        font-size: 3.2rem;
        color: white;
        
    }
    span {
        font-size: 1.6rem;
        opacity: 0.6;
        color:  rgba(255,255, 255, 0.6) ;
    }


`

export const   ContentCharacters = styled.div `
    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.6rem 3rem;

    }
    button {
        display: block;
        line-height: 6.5rem;
        background-color: #5b1fa6;
        border-radius:6px ;
        width: 30rem;
        margin: 0 auto;
        border: none;
        font-size: 1.8rem;
        cursor: pointer;
        margin-top: 4.8rem;
        color: white;
        transition: filter .3s;
        &:hover {
            filter:brightness(0.8) ;

        }

    }
    
`

export const Loader = styled.div `
    background-color: #040011;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2022;
    width : 100%;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
    
`