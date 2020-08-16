import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Wrapper from '../components/common/Wrapper'
import Layout from '../components/common/Layout'
import { MetaData } from '../components/common/meta'
import Container from '../components/common/Container'
import Article from '../components/common/Article'

const Page = ({ data, location }) => {
    const page = data.ghostPage

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
            />
            <Helmet>
                <style type="text/css">{`${page.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <Wrapper className="container">
                    <Container>
                        <Article className="content">
                            <h1 className="content-title">{page.title}</h1>
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: page.html }}
                            />
                        </Article>
                    </Container>
                </Wrapper>
            </Layout>
        </>
    )
}

export default Page

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`
