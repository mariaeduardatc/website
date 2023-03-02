import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --white: #FFFFFF;
    
        --purple-light: #A360C2;
        --blue-dark: #3C3C60;
        --blue-light: #3c3c606f;
    
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  'Roboto';
    }
    
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%; 
        }
    
    }
    
    body{
        background: var(--white);

        &.dark{
            background: var(--blue-dark);
        }
    }
    
    button{
        cursor: pointer;
    }
    
    a{
        text-decoration: none;
    }
    
    img{
        max-width: 100%;
    }

    h1{

        font-weight: 700;
        font-size: 40px;
    }

    h1, h2, h3, h4, p{
        color: var(--blue-dark);

        &.dark{
            color: var(--white);
        }
    }
`