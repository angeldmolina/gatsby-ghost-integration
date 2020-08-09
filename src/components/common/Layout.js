import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import GlobalStyles from '../../styles/GlobalStyles'
import Header from '../common/Header'
import Footer from '../common/Footer'

const Main = styled.main`
    padding: 1em;
`

const DefaultLayout = ({ data, children, isHome }) => {
    const site = data.allGhostSettings.edges[0].node

    return (
        <>
            <GlobalStyles />
            <div className="viewport">

                <Header data={data} site={site} isHome={isHome}/>

                <Main>
                    {children}
                </Main>

                <Footer site={site}/>

            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                charachters: file(relativePath: {eq: "charachters.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                jumppoint: file(relativePath: {eq: "jumppoint.jpg"}) {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
