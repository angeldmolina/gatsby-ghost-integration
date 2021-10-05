import React from 'react'
import { graphql } from 'gatsby'

import PostFeed from '../components/common/PostFeed'
import Container from '../components/common/Container'
import Wrapper from '../components/common/Wrapper'
import Layout from '../components/common/Layout'
import PostCard from '../components/common/PostCard'
import Pagination from '../components/common/Pagination'
import { MetaData } from '../components/common/meta'

const Tag = ({ data, location, pageContext }) => {
    const tag = data.ghostTag
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="series"
            />
            <Layout>
                <Wrapper className="container">
                    <Container maxWidth="1200px">
                        <header className="tag-header">
                            <h1>Tag: {tag.name}</h1>
                            {tag.description ? <p>{tag.description}</p> : null }
                        </header>
                        <PostFeed>
                            {posts.map(({ node }) => (
                                <PostCard key={node.id} post={node} />
                            ))}
                        </PostFeed>
                    </Container>
                    <Pagination pageContext={pageContext} />
                </Wrapper>
            </Layout>
        </>
    )
}

export default Tag

export const pageQuery = graphql`
    query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostTag(slug: { eq: $slug }) {
            ...GhostTagFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: {tags: {elemMatch: {slug: {eq: $slug}}}},
            limit: $limit,
            skip: $skip
        ) {
            edges {
                node {
                ...GhostPostFields
                }
            }
        }
    }
`
