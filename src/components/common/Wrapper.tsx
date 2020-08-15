import styled from 'styled-components'
import bg from '../../images/pg-bckg.png'

export interface IWrapperProps {
    dark: boolean
}

const Wrapper = styled.div<IWrapperProps>`
    padding: 1em;
    ${({dark }) =>  dark === true && `
        background-image: url(${bg});
        color: white;
    `}
`
export default Wrapper