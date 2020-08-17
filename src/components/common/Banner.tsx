import styled from 'styled-components'

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
    min-height: 50vh;
    color: white;
    p { 
        font-size: 120%;
    }
    a {
        text-decoration: none;
        display: inline-block;
        margin-top: 10px;
        padding: 20px;
        background-color: rgba(255,255,255,0.2);
        border-radius: 5px;
        color: white;
        transition: background-color 0.2s ease-in-out;

        &:hover,
        &:active,
        &:focus {
            background-color: rgba(255,255,255,0.6);
        }
    }

    > * {
        margin: auto;
    }
`

export default Banner
