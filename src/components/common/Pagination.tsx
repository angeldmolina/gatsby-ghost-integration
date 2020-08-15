import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const SPagination = styled.ul`
    margin: auto;
    display: flex;
    justify-content: center;
    padding-left: 0;
    list-style: none;
    
    > li {
        padding: 20px;
    }
`

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    return (
        <nav>
            <SPagination>
                {previousPagePath && (
                <li>
                    <Link to={previousPagePath} rel="prev">
                            Previous
                    </Link>
                </li>
                )}
            {numberOfPages > 1 && <li className="pagination-location">Page {humanPageNumber} of {numberOfPages}</li>}
            <li>
                {nextPagePath && (

                    <Link to={nextPagePath} rel="next">
                            Next
                    </Link>
                )}
            </li>
        </SPagination>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
