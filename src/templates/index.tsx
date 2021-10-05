import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

import Wrapper from '../components/common/Wrapper'
import PostFeed from '../components/common/PostFeed'
import Layout from '../components/common/Layout'
import PostCard from '../components/common/PostCard'
import Pagination from '../components/common/Pagination'
import { MetaData } from '../components/common/meta'
import Container from '../components/common/Container'
import Banner from '../components/common/Banner'
import Alert from '../components/common/Alert'

const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <Wrapper dark={true}>
                    <Container>
                        <Alert>
                            <p>Babylon 5 is a game-changing, ground breaking, emmy-award winning TV series that is in danger of becoming lost and forgotten.</p>
                            <p>We are not going to let that happen. Please join us and help <i>#FreeBabylon5</i></p>
                        </Alert>
                    </Container>
                </Wrapper>
                <Wrapper>
                    <Container maxWidth="1200px">
                        <PostFeed>
                            {posts.map(({ node }) => (
                                <PostCard key={node.id} post={node} />
                            ))}
                        </PostFeed>
                    </Container>
                    <Container>
                        <Pagination pageContext={pageContext} />
                    </Container>
                </Wrapper>
                <Wrapper bgImage={data.characters.childImageSharp.fluid.src}>
                    <Container>
                        <Banner>
                            <div>
                                <h2>Our Last, Best Hope.</h2>
                                <p>Babylon 5 changed our lives. It changed a lot of things.</p>
                                <p>This might be the last, best hope we have.</p>
                                <Link to="/watch/">Watch Babylon 5 now</Link>
                            </div>
                        </Banner>
                    </Container>
                </Wrapper>
                <Wrapper dark={true}>
                    <Container>
                        <Alert>
                            <h2>Blu-ray / HD Edition</h2>
                            <p>Its is very unlikely that a blu-ray or hi definition version of Babylon 5 could ever be created. This recent discussion hilights the problem:</p>
                            <Link style={{ color: `darkblue` }} to="/why-theres-no-blu-ray-edition/">Why there's no blu-ray Edition</Link>
                            <br/><br/>
                            <Link style={{ color: `darkblue` }} to="/official-remasters-published/">There is, however a remastered edition</Link>
                        </Alert>
                    </Container>
                </Wrapper>
                <Wrapper bgImage={data.jumpPoint.childImageSharp.fluid.src}>
                    <Container>
                        <Banner>
                            <div>
                                <h2>Jump Point Forming!</h2>
                                <p>Visit the Jump Point and discover other places where Babylon 5 is being discussed.</p>
                                <Link to="/links">Jump point</Link>
                            </div>
                        </Banner>
                    </Container>
                </Wrapper>
            </Layout>
        </>
    )
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
        filter: {slug: {ne: "data-schema"}}
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    },
    jumpPoint: file(relativePath: { eq: "jumppoint.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          src
        }
      }
    }
    characters: file(relativePath: { eq: "charachters.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          src
        }
      }
    }
  }
`
