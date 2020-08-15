import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Navigation from './Navigation'
import Container from './Container'
import Wrapper from './Wrapper'

const SFooter = styled.footer`
    min-height: 20vh;
    padding: 1em;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;

        > * {
            flex: 1;
        }
    }
`

const Footer = ({ site }) => (
    <Wrapper dark={true}>
        <Container maxWidth="1200px">
        <SFooter>
            <div>
                <Link to="/" title={site.title}>                
                    {site.logo ?
                        <img src={site.logo} alt={site.title} width="320px" height="auto"/>
                        : <Img fixed={data.logo.childImageSharp.fixed} alt={site.title} />
                    }
                </Link> 
                <p>Babylon 5, characters, names, and all related indicia are trademarks of Warner Bros. Entertainment, Inc. ©1994-2013 All Rights Reserved.</p>
            </div>
            <div>
                &nbsp;
            </div>
            <div>
                <Navigation data={site.navigation} direction="column" />
            </div>
        </SFooter>
    </Container>
    </Wrapper>
)

export default Footer
