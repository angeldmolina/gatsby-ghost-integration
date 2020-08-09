import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import config from '../../utils/siteConfig'
import { Navigation } from '.'

const SHeader = styled.header`
    min-height: 20vh;
    background-size: cover;
    background-repeat: none;
    padding: 1em;
`

const Header = ({ data, site, isHome }) => {
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    return (
        <SHeader className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
            <div className="container">
                <div className="site-mast">
                    <div className="site-mast-left">
                        <Link to="/">
                            {site.logo ?
                                <img className="site-logo" src={site.logo} alt={site.title} />
                                : <Img fixed={data.logo.childImageSharp.fixed} alt={site.title} />
                            }
                        </Link>
                    </div>
                    <div className="site-mast-right">
                        { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" height="24" width="24"/></a>}
                        { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" height="24" width="24" /></a>}
                        <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" height="24" width="24" /></a>
                    </div>
                </div>
                { isHome ?
                    <div className="site-banner">
                        <h1 className="site-banner-title">{site.title}</h1>
                        <p className="site-banner-desc">{site.description}</p>
                    </div> :
                    null}
                <nav className="site-nav">
                    <div className="site-nav-left">
                        {/* The navigation items as setup in Ghost */}
                        <Navigation data={site.navigation} navClass="site-nav-item" />
                    </div>
                </nav>
            </div>
        </SHeader>
    )
}
export default Header
