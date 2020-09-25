import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 3 / span 10;
  grid-row: 4 / span 5;
  border: 1px solid black;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 6;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`
