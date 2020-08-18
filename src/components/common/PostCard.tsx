import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const Body = styled.div``

const SPostCard = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid darkblue;
    
    p {
        word-break: break-word;
    }
    header,
    ${Body},
    footer {
        padding: 5px 20px;
    }
    header {
        background-color: lightblue;
        min-height: 110px;
        display: flex;
        align-items: center;
        position: relative;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: darkblue;
        }

        a {
            text-decoration: none;
            
            &:hover,
            &:active,
            &:focus {
                text-decoration: underline;
            }
        }
        &:after {
            position: absolute;
            content: '';
            background-color: white;
            right: 0;
            top: 0;
            width: 0; 
            height: 0; 
            border-left: 15px solid lightblue;
            border-right: 15px solid darkblue;
            border-top: 15px solid lightblue;
            border-bottom: 15px solid lightblue;
        }
    }
    footer {
        background: darkblue;
        color: white;
        margin-top: auto;
        min-height: 70px;

        a {
            color: white;
            text-decoration: none;
            letter-spacing: 1.1px;

            &:hover,
            &:active,
            &:focus {
                text-decoration: underline;
            }
        }
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
            <Body>
                <p>{post.excerpt}</p>
            </Body>
            <footer>
                <div/>
                <div>Published on {post.published_at_pretty}</div>
                {post.tags.length > 0 && <div>Posted in: <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>}
                <Link to={url}>
                    <h3>Read "{post.title}"</h3></Link>
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
