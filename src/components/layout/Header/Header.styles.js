import styled from 'styled-components';

export const HeaderStyled = styled.div`
    width: 100%;


    .header-container{
        flex-direction: row;
        align-items: center;
        padding: 1rem 0;
        justify-content: space-between;

        h1{
            font-size: 24px;
            margin: 0;
        }
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            li{
                display: inline-block;
                position: relative;
                margin-right: 15px;

                &:last-child{
                    margin-right: 0;
                }

                a{
                    text-decoration: none;
                }

                ul{
                    display: none;
                    position: absolute;
                    background-color: #fff;
                    margin: 0;
                    padding: 0;
                    border-radius: 4px;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                    
                    li{
                        display: block;
                        width: 170px;
                        margin-right: 0;

                        &:first-child{
                                a{
                                    border-bottom-left-radius: 0.25rem;
                                    border-bottom-right-radius: 0.25rem;
                                }                                
                            }
                        &:last-child{
                            a{
                                border-bottom-left-radius: 0.25rem;
                                 border-bottom-right-radius: 0.25rem;
                            }                                
                        }

                        a {
                            display: inline-block;
                            padding: 0.5rem 1rem;
                            text-decoration: none;
                            width: 100%;
                            color: #999;
                            transition: all 0.15s ease;

                            
                            &:hover{
                                background-color: #e7e7e7;
                                color: #333;
                            }
                        }
                    }
                }

                &:hover{
                    > ul {
                        display: block;
                    }
                }
            }
        }
    }
`;