import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Navigation from './Navigation'
import bg from '../../images/pg-bckg.png'

const SFooter = styled.footer`
    min-height: 20vh;
    background-image: url(${bg});
    color: white;
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
            <Navigation data={site.navigation} direction="column" />
        </div>
    </SFooter>
)

export default Footer
