import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import config from '../../utils/siteConfig'
import Navigation from './Navigation'
import Banner from './Banner'

import bg from '../../images/pg-bckg.png'

const SHeader = styled.header`
    min-height: 20vh;
    background-size: cover;
    background-repeat: none;
    padding: 1em;
`

const PrimaryNav = styled.nav`
    background: black;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    background-image: url(${bg});

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

const SocialLinks = styled.div`
    margin: auto;

    @media (min-width: 768px) {
        margin-left: auto;
        margin-right: initial;
    }
    a {
        display: inline-block;
        padding: 20px 20px 10px 20px;

        &:hover,
        &:active,
        &:focus {
            color: darkblue;
            background-color: grey;
        }
    }
`

const LogoLink = styled(Link)`
    display: block;
    margin-top: 6px;

    img {
        padding: 20px 0;
        max-width: 100%;
    }
`

const Header = ({ data, site, isHome }) => {
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    return (
        <SHeader style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
            <PrimaryNav>
                <LogoLink to="/">
                    {site.logo ?
                        <img src={site.logo} alt={site.title} width="320px" height="auto"/>
                        : <Img fixed={data.logo.childImageSharp.fixed} alt={site.title} />
                    }
                </LogoLink>
                <Navigation data={site.navigation} direction="row" />
                <SocialLinks>
                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" height="24" width="24"/></a>}
                    { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" height="24" width="24" /></a>}
                    <a className="site-nav-item" href={`${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" height="24" width="24" /></a>
                </SocialLinks>
            </PrimaryNav>
            { isHome ?
                <Banner>
                    <div>
                        <h1>{site.title}</h1>
                        <p>{site.description}</p>
                    </div>
                </Banner> :
                null}
        </SHeader>
    )
}
export default Header
