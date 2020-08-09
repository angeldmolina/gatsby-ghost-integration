import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Navigation } from '.'

const SFooter = styled.footer`
    min-height: 20vh;
    background-size: cover;
    background-repeat: none;
    padding: 1em;
`

const Footer = ({ site }) => (
    <SFooter className="site-foot">
        <div className="site-foot-nav container">
            <div className="site-foot-nav-left">
                <Link to="/">{site.title}</Link> © 2019 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost headless</a> hosted on <a href="https://heroku.com">Heroku</a> and <a href="">Gatsby</a> hosted on <a href="htpps://netlify.com">Netlify</a>.
            </div>
            <div className="site-foot-nav-right">
                <Navigation data={site.navigation} navClass="site-foot-nav-item" />
            </div>
        </div>
    </SFooter>
)

export default Footer
