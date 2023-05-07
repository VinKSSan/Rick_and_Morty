import styled from "styled-components";




export const MeSec = styled.div`
    width: 100%;
    max-width: 10rem;
    position: fixed;
    right: 3rem;
    display:flex ;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.399) ;
    margin-left: 2rem;
    border-radius: 6px;
    .BtnMen {
        z-index: 6;
        display: flex;
        align-items: center;
        justify-content: right;
        padding:0.5rem;
        button {
            cursor: pointer;
            width: 0.5rem;
            margin: 0;
            background-color: transparent;
            border: none;
        }
    }
`

export const ModMen  = styled.div `
    height: 12rem;
    margin: 5px;
    display: ${({disp}) => (disp) ? "flex" : "none"};
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    
    .secaoNav {
        padding: 2px;
        z-index: 7;
        width: 100%;
        height: 4rem;
        background-color:  rgba(250 ,250, 250, 0.699);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        border: solid 1px rgba(0 ,0, 0, 0.199);
        cursor: pointer;
        span {
            color: black;
            text-align: center;
            align-items: center;
        }
    }
`
