import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
grid-column: 3 / span 10;
grid-row: 2 / 4;
overflow: hidden;
position: relative;
border: 1px solid black;

@media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 6;
}
@media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;
}
`
