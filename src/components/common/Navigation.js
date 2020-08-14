import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavList = styled.ul`
    display: flex;
    padding-left: 0;
    flex-direction: ${({ direction = `column` }) => direction };
    justify-content: center;
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

const Navigation = ({ data, direction }) => (
    <NavList direction={direction}>
        {data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <a href={navItem.url} key={i} target="_blank" rel="noopener noreferrer">{navItem.label}</a>
            } else {
                return <NavLink to={navItem.url} key={i}>{navItem.label}</NavLink>
            }
        })}
    </NavList>
)

export default Navigation
