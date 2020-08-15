import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const SPostCard = styled.div`
    padding: 20px;
    
    p {
        word-break: break-word;
    }
`

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <SPostCard>
            <header>
                {post.feature_image &&
                    <div style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
                <Link to={url}>
                    <h2>{post.title}</h2></Link>
            </header>
            <p>{post.excerpt}</p>
            <footer>
                <div/>
                <div>Published on {post.published_at_pretty}</div>
                {post.tags.length > 0 && <div>Posted in: <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>}
                <div>
                    <div>{readingTime}</div>
                </div>
            </footer>
        </SPostCard>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        published_at_pretty: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
