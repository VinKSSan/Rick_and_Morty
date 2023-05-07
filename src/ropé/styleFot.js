import styled from "styled-components";


export const Foter = styled.footer`
    
    background-color:  #040011;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 5rem;
    &:after {
        content: "";
        width: 100%;
        max-width: 121.6rem;
        height: 4px;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -60.8rem;
    }
    div {
        height: 100%;
        .logo {
            position: relative;
            top: -2rem;
            left: 4rem;
            color: #fff;
            margin: 0;
            h1 {
                margin: 0 auto;
            }
        }
    
        .top-footer {
            
            border-bottom: 2px solid rgba(73, 196, 253, 0.2);
            padding-bottom: 4.8rem;
            margin-bottom: 5.7rem;

            .faça_parte {
                display: flex;
                align-items: center;
            
                span {
                    font-size: 1.6rem;
                    line-height: 1.9rem;
                    text-align: center;
                    color: #FFFFFF;
                    opacity: 0.9;
                    font-family: 'Poppins', sans-serif;
                    margin-right: 3rem;
                    margin-bottom: 5rem;
                }
                ul {
                    display: flex;
                    align-items: center;
                    li {
                        &:not(:first-child) {
                            margin-left: 3rem;
                        }
                        a {
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.5rem;
                            line-height: 1.9rem;
                            color: #FFFFFF;
                            opacity: 0.67;
                            transition: opacity .3s;
                            &:hover {
                                opacity: 1;
                            
                            }
                        }
                    }
                }
            }   
        }
        .area {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            border-bottom: 2px solid rgba(73, 196, 253, 0.2);
            padding-bottom: 6rem;
            margin-bottom: 3.9rem;
            nav {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                max-width: 38.5rem;    
                    
                .item {
                    strong {
                        display: block;
                        font-weight: 600;
                        font-size: 1.6rem;
                        line-height: 3.3rem;
                        color: #FFFFFF;
                        font-family: 'Poppins', sans-serif;
                        margin-bottom: 2.2rem;
                    }
                    ul {
                        a {
                            display: block;
                            margin-bottom:2rem ;
                            font-family: 'Poppins', sans-serif;
                            font-size: 1.6rem;
                            line-height: 1.9rem;
                            color: #FFFFFF;
                            opacity: 0.67;
                            transition: opacity .3s;
                            &:hover { 
                                opacity: 1;
                            }  
                        }
                    }
                }
            }
     
        }
    }
    


`