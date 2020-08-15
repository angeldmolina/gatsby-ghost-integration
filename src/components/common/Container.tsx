import React from 'react'
import styled from 'styled-components'

export interface IContainerProps {
    maxWidth?: string
}

const Container = styled.div`
    margin: auto;
    max-width: ${({ maxWidth = '720px' }) => maxWidth };
`

export default Container
