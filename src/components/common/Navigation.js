import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
`

const NavLink = styled(Link)`
    display: block;
    padding: 1em;
    color: white;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:active,
    &:focus {
        color: darkblue;
        background-color: grey;
    }
`

const Navigation = ({ data, navClass }) => (
    <NavList>
        {data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <a className={navClass} href={navItem.url} key={i} target="_blank" rel="noopener noreferrer">{navItem.label}</a>
            } else {
                return <NavLink className={navClass} to={navItem.url} key={i}>{navItem.label}</NavLink>
            }
        })}
    </NavList>
)

Navigation.defaultProps = {
    navClass: `site-nav-item`,
}

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    navClass: PropTypes.string,
}

export default Navigation
