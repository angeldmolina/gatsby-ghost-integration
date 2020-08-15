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
            <header className="post-card-header">
                {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
                <Link to={url}>
                    <h2 className="post-card-title">{post.title}</h2></Link>
                {post.tags && <div className="post-card-tags">Posted in: <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>}
            </header>
            <p>{post.excerpt}</p>
            <footer className="post-card-footer">
                <div className="post-card-footer-left"/>
                <div>Published on {post.published_at_pretty}</div>
                <div className="post-card-footer-right">
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
