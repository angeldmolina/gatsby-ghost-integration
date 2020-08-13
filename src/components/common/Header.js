import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import config from '../../utils/siteConfig'
import { Navigation } from '.'

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
    margin-left: auto;

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
`

const Header = ({ data, site, isHome }) => {
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    return (
        <SHeader className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
            <div className="container">
                <PrimaryNav className="site-nav">
                    <LogoLink to="/">
                        {site.logo ?
                            <img className="site-logo" src={site.logo} alt={site.title} width="320px" height="auto"/>
                            : <Img fixed={data.logo.childImageSharp.fixed} alt={site.title} />
                        }
                    </LogoLink>
                    <div className="site-nav-left">
                        <Navigation data={site.navigation} navClass="site-nav-item" />
                    </div>
                    <SocialLinks>
                        { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" height="24" width="24"/></a>}
                        { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" height="24" width="24" /></a>}
                        <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" height="24" width="24" /></a>
                    </SocialLinks>
                </PrimaryNav>
                { isHome ?
                    <div className="site-banner">
                        <h1 className="site-banner-title">{site.title}</h1>
                        <p className="site-banner-desc">{site.description}</p>
                    </div> :
                    null}
            </div>
        </SHeader>
    )
}
export default Header
