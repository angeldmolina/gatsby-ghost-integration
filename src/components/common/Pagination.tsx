import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const SPagination = styled.nav`
    margin: auto;
    display: flex;
    justify-content: center;
    
    > * {
        padding: 20px;
    }
`

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    return (
        <SPagination>
            <div>
                {previousPagePath && (

                    <Link to={previousPagePath} rel="prev">
                            Previous
                    </Link>

                )}
            </div>
            {numberOfPages > 1 && <div className="pagination-location">Page {humanPageNumber} of {numberOfPages}</div>}
            <div>
                {nextPagePath && (

                    <Link to={nextPagePath} rel="next">
                            Next
                    </Link>
                )}
            </div>
        </SPagination>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
