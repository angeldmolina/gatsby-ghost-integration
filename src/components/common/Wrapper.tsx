import React, { FC } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import bg from '../../images/pg-bckg.png'

export interface IWrapperProps {
    bgImage?: string
    children: React.ReactChild
    dark?: boolean
}

const Wrapper = styled.div<IWrapperProps>`
    padding: 1em;
    ${({bgImage}) => bgImage 
    && `
    background: url(${bgImage}) no-repeat center center;
    background-size: cover;
    ` };
    ${({dark = false}) => dark && `
        background: url(${bg});
        color: white;
    `};
`

export default Wrapper