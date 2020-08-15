import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Wrapper from '../components/common/Wrapper'
import Layout from '../components/common/Layout'
import PostCard from '../components/common/PostCard'
import Pagination from '../components/common/Pagination'
import { MetaData } from '../components/common/meta'
import Container from '../components/common/Container'

const PostFeed = styled.div`
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(3, 33%);
        grid-gutter: 15px;
    }
`

const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <Wrapper className="container">
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
    }
  }
`
