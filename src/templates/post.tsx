import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Wrapper from '../components/common/Wrapper'
import Layout from '../components/common/Layout'
import { MetaData } from '../components/common/meta'
import Container from '../components/common/Container'
import Article from '../components/common/Article'

const Post = ({ data, location }) => {
    const post = data.ghostPost

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <Wrapper className="container">
                    <Container>
                    <Article className="content">
                        { post.feature_image ?
                            <figure className="post-feature-image">
                                <img src={ post.feature_image } alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>

                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                            <hr/>
                            <div>Published on {post.published_at_pretty}</div>
                        </section>
                    </Article>
                    </Container>
                </Wrapper>
            </Layout>
        </>
    )
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
