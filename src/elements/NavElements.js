import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 6;
  }
`
