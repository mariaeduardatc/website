import styled from "styled-components"


export const Container = styled.header`
    max-width: 1120px;
    margin: 50px auto;

    color: var(--blue-dark);

    h1, h2{
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
    }

    .line{
        height: 3px;
        border-radius: 5px 5px 0 0;
        padding: 4px;
        width: 90px;
        background: var(--purple-light);
    }

    img{
        border-radius: 50%;
        justify-content: center;
    }
`;

export const Content = styled.div`

    padding: 5rem 1rem 5rem;
    display: flex;
    gap: 2rem;

`;


export const Pictures = styled.div`
    padding: 100px;
    border-radius: 50%;
    background: #a360c254;

    img{
        width: 150px;
        height: 150px;
        border: #a360c254 solid 3.5px;

        border-radius: 50%;
        position: relative;
    }

    #profile{
        bottom: 100px;
        z-index: 4;
    }

    #BG1{
        bottom: 280px;
        right: 200px;
        z-index: 1;
    }

    #BG2{
        bottom: 330px;
        right: 80px;
        z-index: 1;
    }

    #SF1{
        bottom: 30px;
        right: 10px;
        z-index: 2;
    }

    #SF2{
        right: 80px;
        bottom: 130px;
        z-index: 3;
    }

    #SK1{
        bottom: 140px;
        right: -30px;
        z-index: 2;
    }

    #SK2{
        bottom: 50px;
        right: 250px;
        z-index: 1;
    }

    #TP1{
        bottom: 200px;
        left: -150px;
        z-index: 2;
    }

    #TP2{
        bottom: 340px;
        left: -30px;
        z-index: 2;
    }
`;

export const Presentation = styled.div`
    text-align: center;

    margin-top: 200px;
    margin-left: 50px;

    h2{
        margin-bottom: 10px;
    }
    
    p{
        width: 350px;
        height: 250px;
        text-align: left;
        
        &.dark{
            background: #ffffffcf;
            border-radius: 50px;
            margin-bottom: 30px;
            vertical-align: middle;
            padding: 25px;

            color: var(--blue-dark);
        }
    }

    button{
        padding: 25px 70px;
        border: none;
        border-radius: 50px;

        background: var(--blue-dark);
        

        h1{
            font-size: 16px;
            color: white;
        }

        &.dark{
            background: var(--purple-light);
        }
    }
    
`