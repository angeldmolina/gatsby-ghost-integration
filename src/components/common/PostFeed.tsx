import styled from 'styled-components'

const PostFeed = styled.div`
    display: grid;
    grid-gap: 15px;

    @media (min-width: 768px){
        grid-template-columns: repeat(3,32.25%);
    }
`
export default PostFeed
